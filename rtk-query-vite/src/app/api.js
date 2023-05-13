import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// /count의 GET / POST / PATCH / DELETE 등 operation하나를 endpoint라고 한다.

// createApi함수는 각각의 엔드포인트(에시에서 getCount)를 자동으로 갱신할 수 있는 hook을 생성해준다. e.g. useGetCountQuery
export const api = createApi({
   reducerPath: "countApi", // 기본적으로 정하지 않으면 api로 된다.
   baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api" }),
   //tagTypes: 전역적으로 사용하고 있는 태그 이름 지정
   tagTypes: ["Count"],
   endpoints: (builder) => ({
      getCount: builder.query({
         query: ({ name }) => `count/${name}`,
         // 서버 캐시를 컴포넌트가 구독하고 있는데 이 캐시가 비게되면 서버에서 자동으로 새 값을 넣어준다.
         // result는 서버 데이터값, error는 에러났을 때 내용, arg는 useGetCountQuery({name})에서 name이 arg로 들어간다.
         providesTags: (result, error, arg) => [
            { type: "Count", id: arg.name },
         ],
      }),
      setCount: builder.mutation({
         //뮤테이션의 경우는 쿼리의 프로퍼티로 함수를 지정해주면 된다.
         //뮤테이션 훅이 반환하는 배열의 첫번째 원소인 함수로 전달받는 인자가 query 함수의 매개변수로 자동으로 들어오게 된다.

         //query에는 서버와 통신하는 정책을 명시해주는 곳이라고 생각하면 된다.
         query: ({ name, value }) => {
            return {
               url: `count/${name}`,
               method: "POST",
               body: { value },
            };
         },
         //서버 캐시를 무효화만들어서 지워버린다 라는 의미,
         //이 아래의 태그에 해당하는 서버 캐시를 지워버린다는 의미 => 서버 캐시가 지워졌으니 새로운 값을 서버에서 update하겠죠?
         invalidatesTags: (result, error, arg) => [
            { type: "Count", id: arg.name },
         ],
      }),
   }),
});
