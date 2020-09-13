# babel-plugin-transform-jsx-attr
Babel plugin to transform node type  `JSXAttribute`  in jsx



## Install

```bash
$ npm install --save-dev babel-plugin-transform-jsx-attr
```

and

```bash
$ npm install --save-dev @babel/core @babel/cli @babel/preset-react
```


## Usage

```javascript
// .babelrc configuration
{
  "presets": [
    // ...the rest of your presets
    "@babel/preset-react"
  ],
  "plugin": [
    // ...the rest of your plugin
    ["transform-jsx-attr", {
      "willTransformAttr": "resultAttr",
      // ...the rest of attributes will be transforming
    }]
  ]
}
```



## Example

### .babelrc

```json
{
  "presets": [
    "@babel/preset-react"
  ],
  "plugin": [
    ["transform-jsx-attr", {
      "class": "className",
      "onPress": "onClick"
    }]
  ]
}
```



#### Input

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div class="v-list" onPress={() => {}}>example</div>
    )
  }
}
```



#### Output

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return React.createElement("div", {
      className: "v-list",
      onClick: () => {}
    }, "example");
  }

}
```



## License

MIT