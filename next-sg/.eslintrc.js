module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: ["off", "single"],
    "typescript-eslint/quotes": ["error", "double"],
    "no-unused-vars": "warn",
    "spaced-comment": "off",
    "react/react-in-jsx-scope": "off",
    "typescript-eslint/no-unused-vars": "warn",
    "jsx-ally/corrtrol-has-associated-label": "off",
    "react/no-array-index-key": "off", // key값으로 index를 人b용할 수 있다. "conrna-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", //화살표 항수 안에 return을 사용할 수 있다. "react/no-unescaped-entities”: "off”, //문자열 내에서 " 1 > } 허용 "react/prop-types": "off", //proptypes를 人수용하지 않는다. "object-curly-newline": ’’off", // { 다음 줄 바꿈을 강제로 사용하지 않는다. ”react/jsx-one-expression-per-line": "off", //한 라인에 여러 개의 JSX를 사용할 수 있다.
    "implicit-arrow-inebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다. "no-shadow": "off", //파일 내에서 중복 이름을 사용할 수 있다.
    "operator-linebreak": "off", //연산자 다옹 줄 바꿈을 사용할 수 있다. "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    "react/jsx-props-no-spreading": "off", //props를 스프레드 할 수 있다. "jsx-ally/anchor-is-valid": "off”, // next js에서는 a에 href없이 人두용 "global-require”: "off", //함수 내에서 require 사용 가능 "no-use-before-define": ’’off", // 선언전에 人수용하지 말라, "import/prefer-default-export": "off", //export default 권장 "no-param-reassign”: "off", //param assign 하지 않기 "jsx-ally八abel-has-associated-control": "off",
    "no-invalid-css": "off",
    "no-confusing-arrow": "off",
    "react/jsx-curly-newline": "off",
    indent: "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
