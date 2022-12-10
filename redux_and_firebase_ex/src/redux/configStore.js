import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//configStore는 리덕스 공식문서에 나와있기 때문에 외우지않고 확인하면 된다.
//직접 안쳐도됨 걍 복붙 ㄱ
import bucket from "./modules/bucket";

const middlewares = [thunk];
const rootReducer = combineReducers({ bucket });
//미들웨어 하나가 thunk하나 뿐이라 ...전개 구문 안쓰고 그냥 넣어도됨)
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);
// 필요한 옵션은 딱히 없기 떄문에 rootReducer로 bucket리듀서를 묶어주고 그것만
// createStore의 인자로 전달(인자값에 다른 옵션이 들어간다함 만약에 옵션이 있다면)
export default store;
