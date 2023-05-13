//✅module 인식 에러 해결 방법: eslint 설정 시, env에서 node를 설정해주지 않아서 그럼 node: true로 주면된다.

module.exports = {
   env: { browser: true, es2020: true, node: true },
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
   ],
   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
   settings: { react: { version: "18.2" } },
   plugins: ["react-refresh"],
   rules: {
      "react-refresh/only-export-components": "warn",
   },
};
