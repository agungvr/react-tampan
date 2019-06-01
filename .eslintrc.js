module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "env": {
        "jest": true,
        "browser": true   
    },
    "rules": {
      "class-methods-use-this": 0,
      "import/no-named-as-default": 0,
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx"]
        }
      ]
    },
    "plugins": [
      "prettier"
    ]
}