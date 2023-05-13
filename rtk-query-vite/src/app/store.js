import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
   reducer: {
      //api state이름과 api로 자동생성된 리듀서 함수도 등록
      [api.reducerPath]: api.reducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(api.middleware)
});
