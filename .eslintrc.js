module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "settings": {
      "import/resolver": "webpack"
    },
    "globals": {
      "document": true
    },
    "rules": {
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-unresolved": "off",
      "no-console": "off",
      "no-constant-condition": [
        "error",
        { "checkLoops": false }
      ],
      "no-plusplus": "off"
    }
};
