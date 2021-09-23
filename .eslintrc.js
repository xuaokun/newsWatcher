/*
 * @Description: 
 * @Author: akxu
 * @Date: 2021-07-30 19:37:53
 * @LastEditTime: 2021-09-18 17:18:00
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": ["error", { "code": 800 }],
    "semi": ['error', 'always'],//分号
    'comma-dangle': ['error', 'only-multiline'],
    'no-empty': 'error',
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
