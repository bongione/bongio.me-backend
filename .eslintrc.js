module.exports = {
    "env": {
        node: true
    },
    "plugins": [
        "standard",
        "promise",
        "async-await"
    ],
    "extends": ["standard"],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "indent" : [2, 4],
        "no-tabs": 0
    }
};
