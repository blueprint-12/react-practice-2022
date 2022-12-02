//ES5버전에서는 import export대신에 require를 사용합니다.
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
//서버를 띄우기 위한 기본 middleware가 json-server에서 제공하고 있기 때문에 기본값을
//사용해준다.(노드로 치면 express 같은 아이)
const middlewares = jsonServer.defaults();
//use내부에는 내가 어떤 경로를 갖고 있다.
//라고 할 때의 경로(즉 라우트)를 명시해줘야한다.
server.use(middlewares);

server.get("/geterror", (req, res) => {
  //임의로 json 서버에서 error내려주기
  res.status(500).jsonp({ error: "500에러입니다." });
});
server.use(router);
server.use((req, res, next) => {
  next();
});
// listen의 1번째 인자: 몇번 포트에 열거야?
// 2번째인자 : 열렸을 때 뭐할래?
server.listen(5001, () => {
  console.log("Server is Running");
});
