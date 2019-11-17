module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "globals": {},
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/jsx-props-no-spreading": 0,
      "import/prefer-default-export": 0,
      "no-unused-vars": "warn",
    }
};
