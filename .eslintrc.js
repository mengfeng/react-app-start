/*
 * @Author: alan_mf
 * @Date: 2022-11-08 15:47:32
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 16:06:44
 * @FilePath: /react-app-start/.eslintrc.js
 * @Description: 
 * 
 */
// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    "no-cond-assign": 2,
    "no-console": [
      "error", {
        "allow": ["log", "warn", "error", "info"]
      }
    ],
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": 0,
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 0,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 禁用特定的全局变量
    "no-restricted-globals": 2,
    // 禁止覆盖受限制的标识符
    "no-shadow-restricted-names": 2,
    // 禁止将变量初始化为 undefined
    
    // 强制使用一致的换行风格
    "linebreak-style": [2, "unix"],
    //在JSX中强制布尔属性符号
    "react/jsx-boolean-value": 2,
    //在JSX中验证右括号位置
    // "react/jsx-closing-bracket-location": 1,
    //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-curly-spacing": [2, {
      "when": "never",
      "children": true
    }],
    //在数组或迭代器中验证JSX具有key属性
    "react/jsx-key": 2,
    // 限制JSX中单行上的props的最大数量
    "react/jsx-max-props-per-line": [1, {
      "maximum": 5
    }],
    //防止在JSX中重复的props
    "react/jsx-no-duplicate-props": 2,
    //  //防止使用未包装的JSX字符串
    // "react/jsx-no-literals": 0,
    //在JSX中禁止未声明的变量
    "react/jsx-no-undef": 2,
    //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-pascal-case": 0,
    //防止反应被错误地标记为未使用
    "react/jsx-uses-react": 2,
    //防止在JSX中使用的变量被错误地标记为未使用
    "react/jsx-uses-vars": 2,
    //防止在componentDidMount中使用setState
    "react/no-did-mount-set-state": 2,
    //防止在componentDidUpdate中使用setState
    "react/no-did-update-set-state": 2,
    //防止使用未知的DOM属性
    "react/no-unknown-property": 2,
    //为React组件强制执行ES5或ES6类
    "react/prefer-es6-class": 2,
    //防止在React组件定义中丢失props验证
    // "react/prop-types": 1,
    //使用JSX时防止丢失React
    "react/react-in-jsx-scope": 2,
    //防止没有children的组件的额外结束标签
    "react/self-closing-comp": 0,
    //禁止不必要的bool转换
    // "no-extra-boolean-cast": 0,
    //防止在数组中遍历中使用数组key做索引
    // "react/no-array-index-key": 0,
    //不使用弃用的方法
    "react/no-deprecated": 2,
    //在JSX属性中强制或禁止等号周围的空格
    "react/jsx-equals-spacing": 2,
    "react/jsx-filename-extension": [2, {
      "extensions": [".js", ".jsx"]
    }],
    // 禁止未使用的变量
    "no-unused-vars": 0,
    }
}
