## **vite**

> Vue를 만든 Evan You가 만든 빌드 도구이다.

- CRA 보다 vite 를 사용하는 것이 훨씬 더 빠르다.(매우 빠른 HMR, Hot Module Reload)
- CRA은 webpack 을 사용하고, vite 는 esbuild를 사용한다.

["vite" 관련 참고자료1](https://www.gpmd.co.uk/blog/what-is-vite-and-why-do-you-need-it)
["vite" 관련 참고자료2](https://yozm.wishket.com/magazine/detail/1620/)

### **SCSS(Sass) 사용법**

`yarn add -D sass`

module.scss 확장자명을 통해서 파일을 만들고 사용하고자하는 컴포넌트 파일(.jsx)에서 import후 사용하면 된다.

`import css from "파일경로.module.scss"`

### **추천 extension**

<i>**EditorConfig for VS Code**</i> : 프리티어처럼 코드 포매팅 설정 가능

1. 프로젝트 폴더의 최상단에 `.editorconfig` 파일을 만든다.
2. 파일 내부에 setting 코드를 작성해준다.

```
root = true

[*.{ts,tsx,js,jsx,css,scss}]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
# trim_trailing_whitespace = true

[{.gitignore}]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```
