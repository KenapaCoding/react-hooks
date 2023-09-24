import { ACTION } from './actionType';
export function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + action.payload };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
  }
}
