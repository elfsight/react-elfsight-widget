# react-elfsight-widget

[![npm](https://img.shields.io/npm/dm/react-elfsight-widget)](https://www.npmjs.com/package/react-elfsight-widget)

The package provides a component that helps smoothly integrate an Elfsight widget into a React app.

Please note that to use it you need an [Elfsight](https://elfsight.com/) account and a widget created and configured.

## Getting Started

### Installation

```sh
npm i react-elfsight-widget
```

### Usage

```tsx
import { ElfsightWidget } from 'react-elfsight-widget';

function MyComponent() {
  <ElfsightWidget widgetId={/* replace with a widget id */} lazy />;
}
```

In case you need any assistance, please contact [support](https://help.elfsight.com/).

## Props

### widgetId

Widget identifier.

<details>
  <summary>How to get a widget identifier from an installation code?</summary>
  
  Let's take a look at an arbitrary installation code.
  ```html
  <script src="https://static.elfsight.com/platform/platform.js" defer></script>
  <div class="elfsight-app-85d18ddb-c202-421e-9a88-6c099d7a7833"></div>
  ```
  At the second line we can see a `div` element with a long class name: `elfsight-app-85d18ddb-c202-421e-9a88-6c099d7a7833`, where `85d18ddb-c202-421e-9a88-6c099d7a7833` is the widget identifier.
  
  So, in order to obtain a widget identifier you need'll to take it's class name and strip `elfsight-app-` prefix.
</details>

### lazy

Enables lazy loading. Accepts boolean or string (useful when you want to specify a lazy loading mode). If no mode is specified then a widget will be loaded either once it's in the viewport or after user's first activity.

**Modes**:
* **first-activity** — in this mode a widget will be loaded once a user commits first activity (moves mouse, scrolls page, etc.); appearing in the viewport is ignored.
* **in-viewport** — widget will be loaded once it's in the viewport; users activity is ignored.

### className and other props and attributes

Also you can pass any prop that standard `div` element accepts such as `className`, `id`, `style` and others. All these props will be forwarded to a widget container `div` element.
