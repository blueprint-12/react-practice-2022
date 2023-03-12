# Context API and HoC

## how to start

```bash
yarn && yarn start
```

## what we learn

- Context
- Provider
- Consumer
- HoC

1. **Context 만들기**: createContext라는 함수를 사용해서 만들며, 이 함수를 호출하면 Provider 와 Consumer라는 컴포넌트들이 반환된다.
   Provider는 Context를 사용할 값을 설정할 때 사용되고, Consumer 는 나중에 우리가 설정할 값을 불러와야 할 때 사용된다.
   > context는 여러 개를 만들 수 있다. 여러 개의 Context를 사용할 때 이름이 겹치지않고 쉽게 다루기 위해서 Provider과 Consumer 앞에 prefix를 설정해준다.
2. **Provider 사용하기**: Context를 프로젝트에 적용하려면, App을 Provider로 감싸주어야 한다. App.js에서 적용

3. **Consumer 사용하기**: Consumer는 컴포넌트에서 Context를 사용할 때에 사용된다.
