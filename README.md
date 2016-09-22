# Recommended ESLint config for node.js (with babel)

This package contains an extensible shared config for babel nodejs apps.  
It contains plugins:
- [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) - ESLint rules for lodash/fp (`underscore` is forbidden)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports (`require` is forbidden)

## Usage

`npm install --save-dev eslint eslint-config-nodejs-recommended eslint-plugin-lodash-fp eslint-plugin-import`

## Usage

Configure `.eslintrc`

```
{
  "extends": "nodejs-recommended"
}
```


MIT License

Copyright (c) 2016 Łukasz Sentkiewicz