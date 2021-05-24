import { createAction, createReducer } from '@reduxjs/toolkit';

const INSERT_CONTENTS = 'cotnents/INSERT_CONTENTS' as const;
const CREATE_BLOG = 'cotnents/CREATE_BLOG' as const;
const FILE_UPLOAD_APPDATA = 'cotnents/FILE_UPLOAD_APPDATA' as const;

// 액션 생성자 함수
export const insertContents = createAction<TContents>(INSERT_CONTENTS);
export const createBlog = createAction<string>(CREATE_BLOG);
export const fileUploadAppData = createAction<TAppData>(FILE_UPLOAD_APPDATA);

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

// 초기값
const initialState: TAppData = { id: 1, name: '', contents: '블로그에 오신것을 환영합니다.', list: [] };

// 리듀서
const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(insertContents, (state, action: ReturnType<typeof insertContents>) => {
      state.list.push(action.payload);
    })
    .addCase(createBlog, (state, action: ReturnType<typeof createBlog>) => {
      state.name = action.payload;
    })
    .addCase(fileUploadAppData, (state, action: ReturnType<typeof fileUploadAppData>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.contents = action.payload.contents;
      state.list = action.payload.list;
    });
});
export default appReducer;
