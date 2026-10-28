import { useSyncExternalStore } from 'react';
import { createStore, type StateCreator, type StoreApi } from 'zustand/vanilla';

type BoundStore<T> = {
  (): T;
  <U>(selector: (state: T) => U): U;
} & StoreApi<T>;

/**
 * Thay cho `create` của zustand. Khác biệt duy nhất: snapshot phía server là *trạng thái hiện tại*
 * (zustand mặc định dùng trạng thái khởi tạo), để prerender phản ánh ngôn ngữ/trang đã đặt bằng `setState`
 * trước khi render. Phía client, bootstrap đã nạp cùng trạng thái trước khi hydrate nên kết quả khớp nhau.
 * Selector trả về đối tượng mới phải bọc bằng `useShallow` như với zustand gốc.
 */
export const create =
  <T>() =>
  (initializer: StateCreator<T, [], []>): BoundStore<T> => {
    const api = createStore<T>()(initializer);
    function useBound<U>(selector: (state: T) => U = (s) => s as unknown as U): U {
      const snapshot = () => selector(api.getState());
      return useSyncExternalStore(api.subscribe, snapshot, snapshot);
    }
    return Object.assign(useBound, api) as BoundStore<T>;
  };
