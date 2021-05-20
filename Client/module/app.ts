import { createAction, createReducer } from '@reduxjs/toolkit';

const INSERT_CONTENTS = 'cotnent/INSERT_CONTENTS' as const;

// 액션 생성자 함수
export const insertContents = createAction<TContents>(INSERT_CONTENTS);

export type TAppData = {
  id: number;
  name: string;
  contents: string;
  list: TContents[];
};

export type TContents = {
  id: number;
  title: string;
  contents: string;
};

type TAppAction = ReturnType<typeof insertContents>;

// 초기값
const initialState: TAppData = { id: 1, name: '', contents: '블로그에 오신것을 환영합니다.', list: [] };

// 리듀서
const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(insertContents, (state, action: TAppAction) => {
    state.list.push(action.payload);
  });
});
export default appReducer;
