import axios from "axios";

//TMI 공식 문서에서 axios를 "인스턴스"라고 부른다.
//timeout과 같은 네트워크 요청도 처리할 수 있다.
// create메소드의 인자로 객체를 전달하고 이 객체 안에 설정값(config)를 설정할 수 있다.
const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

//interceptors. 뒤에 요청을 가로챌지 응답을 가로챌지를 써줍니다.
//요청(request)을 가로챕니다.

//첫번째 콜백의 인자로 config를 받아오는데 이 config는
//만들어놓은 axios 객체의 기본설정을 가져오는 것입니다.
//이 config 를 return 해줘야지 네트워크 요청을 보낼 수 있습니다.
//주의) return 해주지 않으면 요청의 설정값이 날아가서 요청이 보내지지 않습니다.
instance.interceptors.request.use(
  (config) => {
    // console.log(config);
    config.headers["X-AUTH-TOKEN"] = "1234";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    window.alert("에러가 발생했습니다.");
    //에러가 나면 홈화면으로 라우팅해준다거나
    //404일 경우는 404컴포넌트로 라우팅해준다거나.. 등등 작업을 할 수 있다.
    return Promise.reject(err);
  }
);

export default instance;
