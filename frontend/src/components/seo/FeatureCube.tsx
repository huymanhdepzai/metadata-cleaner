import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';

/**
 * Hộp 3D bằng CSS (theo chương "Box" trong "Intro to CSS 3D transforms" của David DeSandro): sáu mặt là các
 * phần tử tuyệt đối trong cùng một không gian 3D (`preserve-3d`), mỗi mặt được xoay sẵn để trục +Z hướng ra ngoài
 * rồi đẩy ra nửa cạnh hộp. Hộp là hình lập phương cạnh `--cube` (đặt bằng CSS để co giãn theo màn hình).
 *
 * Góc xoay chạy qua một lò xo tự viết (không cần thư viện chuyển động); có thể kéo bằng chuột/cảm ứng
 * (Δx → rotateY, Δy → rotateX), thả tay thì hộp tự bắt về mặt đang hướng về người xem nhất.
 */

export type CubeFace = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';

/** Thứ tự mặt dùng cho danh sách nội dung: mục 0 → mặt trước, mục 1 → mặt phải… */
export const CUBE_FACES: CubeFace[] = ['front', 'right', 'back', 'left', 'top', 'bottom'];

/** Vị trí từng mặt (tách nửa cạnh bằng calc để không phải đo kích thước bằng JS). */
const FACE_TRANSFORM: Record<CubeFace, string> = {
  front: 'rotateY(0deg)',
  back: 'rotateY(180deg)',
  right: 'rotateY(90deg)',
  left: 'rotateY(-90deg)',
  top: 'rotateX(90deg)',
  bottom: 'rotateX(-90deg)',
};

/** Góc xoay của hộp (rotateX, rotateY) để đưa mỗi mặt ra trước. */
const FACE_ROTATION: Record<CubeFace, { x: number; y: number }> = {
  front: { x: 0, y: 0 },
  back: { x: 0, y: -180 },
  right: { x: 0, y: -90 },
  left: { x: 0, y: 90 },
  top: { x: -90, y: 0 },
  bottom: { x: 90, y: 0 },
};

/** Pháp tuyến hướng ra ngoài của từng mặt (hệ trục CSS: y hướng xuống, z hướng về người xem). */
const FACE_NORMAL: Record<CubeFace, [number, number, number]> = {
  front: [0, 0, 1],
  back: [0, 0, -1],
  right: [1, 0, 0],
  left: [-1, 0, 0],
  top: [0, -1, 0],
  bottom: [0, 1, 0],
};

const STIFFNESS = 140;
const DAMPING = 18;
/** Độ nhạy khi kéo: số độ xoay cho mỗi pixel di chuyển. */
const DRAG_SENSITIVITY = 0.5;

const rad = (deg: number) => (deg * Math.PI) / 180;

/** Góc tương đương với `target` (cộng/trừ bội số 360°) gần `current` nhất → hộp luôn xoay theo đường ngắn. */
const nearestTurn = (current: number, target: number) => target + Math.round((current - target) / 360) * 360;

/** Mặt có pháp tuyến hướng về người xem nhiều nhất với góc hiện tại (transform: rotateX(x) rotateY(y)). */
function facingFace(x: number, y: number): CubeFace {
  const [sx, cx, sy, cy] = [Math.sin(rad(x)), Math.cos(rad(x)), Math.sin(rad(y)), Math.cos(rad(y))];
  let best: CubeFace = 'front';
  let bestZ = -Infinity;
  for (const face of CUBE_FACES) {
    const [nx, ny, nz] = FACE_NORMAL[face];
    // Ry trước rồi Rx: z1 = -nx·sinY + nz·cosY; z = ny·sinX + z1·cosX.
    const z = ny * sx + (-nx * sy + nz * cy) * cx;
    if (z > bestZ) [best, bestZ] = [face, z];
  }
  return best;
}

/**
 * Góc nghiêng cố định áp lên sau góc xoay của hộp: nhìn hơi từ trên xuống và lệch sang trái → luôn thấy 3 mặt
 * (mặt đang chọn, mặt trên và mặt phải). `--cube-scale` thu nhỏ hộp trên màn hình hẹp vì hộp nghiêng chiếm
 * rộng hơn cạnh của nó ~1,35 lần.
 */
const TILT_X = -20;
const TILT_Y = -30;

const cubeTransform = (x: number, y: number) =>
  `scale(var(--cube-scale, 1)) translateZ(calc(var(--cube) / -2)) rotateX(${TILT_X}deg) rotateY(${TILT_Y}deg) rotateX(${x}deg) rotateY(${y}deg)`;

export function FeatureCube({
  faces,
  active,
  onActiveChange,
  className = '',
  label,
}: {
  /** Nội dung sáu mặt theo thứ tự `CUBE_FACES`. */
  faces: ReactNode[];
  active: number;
  onActiveChange: (index: number) => void;
  className?: string;
  label: string;
}) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const spring = useRef({ x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, stiffness: STIFFNESS });
  const frame = useRef(0);
  const drag = useRef<{ px: number; py: number; x: number; y: number; moved: boolean } | null>(null);

  const tick = useCallback(() => {
    const s = spring.current;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      s.vx += (-s.stiffness * (s.x - s.tx) - DAMPING * s.vx) * dt;
      s.vy += (-s.stiffness * (s.y - s.ty) - DAMPING * s.vy) * dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      const settled = Math.abs(s.x - s.tx) + Math.abs(s.y - s.ty) < 0.05 && Math.abs(s.vx) + Math.abs(s.vy) < 0.05;
      if (settled) [s.x, s.y, s.vx, s.vy] = [s.tx, s.ty, 0, 0];
      if (cubeRef.current) cubeRef.current.style.transform = cubeTransform(s.x, s.y);
      frame.current = settled && !drag.current ? 0 : requestAnimationFrame(step);
    };
    if (!frame.current) frame.current = requestAnimationFrame(step);
  }, []);

  const rotateTo = useCallback(
    (x: number, y: number) => {
      const s = spring.current;
      [s.tx, s.ty] = [x, y];
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        [s.x, s.y, s.vx, s.vy] = [x, y, 0, 0];
        if (cubeRef.current) cubeRef.current.style.transform = cubeTransform(x, y);
        return;
      }
      tick();
    },
    [tick],
  );

  // Đổi mặt đang chọn → xoay tới mặt đó theo đường ngắn nhất.
  useEffect(() => {
    const s = spring.current;
    const { x, y } = FACE_ROTATION[CUBE_FACES[active]];
    rotateTo(nearestTurn(s.x, x), nearestTurn(s.y, y));
  }, [active, rotateTo]);

  // Đặt lại `frame` khi huỷ: StrictMode (dev) gỡ rồi gắn lại effect, nếu còn giữ id cũ thì vòng lặp không chạy lại.
  useEffect(
    () => () => {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    },
    [],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const s = spring.current;
    drag.current = { px: e.clientX, py: e.clientY, x: s.tx, y: s.ty, moved: false };
    s.stiffness = STIFFNESS / 2; // lỏng tay hơn khi đang kéo
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const [dx, dy] = [e.clientX - d.px, e.clientY - d.py];
    if (!d.moved && Math.hypot(dx, dy) < 4) return;
    d.moved = true;
    rotateTo(d.x - dy * DRAG_SENSITIVITY, d.y + dx * DRAG_SENSITIVITY);
  };
  const onPointerUp = () => {
    const d = drag.current;
    drag.current = null;
    const s = spring.current;
    s.stiffness = STIFFNESS;
    if (!d?.moved) return;
    // Bắt về mặt gần nhất; nếu vẫn là mặt cũ thì tự xoay lại cho thẳng.
    const face = facingFace(s.tx, s.ty);
    const index = CUBE_FACES.indexOf(face);
    const { x, y } = FACE_ROTATION[face];
    rotateTo(nearestTurn(s.tx, x), nearestTurn(s.ty, y));
    onActiveChange(index);
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={`relative grid cursor-grab touch-pan-y place-items-center select-none active:cursor-grabbing ${className}`}
      style={{ perspective: 'calc(var(--cube) * 3)' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        ref={cubeRef}
        className="relative h-[var(--cube)] w-[var(--cube)]"
        style={{ transformStyle: 'preserve-3d', transform: cubeTransform(0, 0) }}
      >
        {CUBE_FACES.map((face, i) => (
          <div
            key={face}
            className="absolute inset-0 [backface-visibility:hidden]"
            style={{ transform: `${FACE_TRANSFORM[face]} translateZ(calc(var(--cube) / 2))` }}
          >
            {faces[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
