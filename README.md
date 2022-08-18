# react-elfsight-widget

[![npm](https://img.shields.io/npm/dm/react-elfsight-widget)](https://www.npmjs.com/package/react-elfsight-widget)

The component that adds [Elfsight](https://elfsight.com/) Widget to a React App.

This package _DOES NOT_ contain any Elfsight Widgets itself.

## Installation

```
npm install react-elfsight-widget
```

## Usage

```tsx
import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function Component() {
  return <ElfsightWidget widgetID="6f4fc62b-74c9-45da-87fa-b71eda360cc0" />;
}
```

_NOTE: There is no need to manually add Elfsight's `platform.js` script to a page, the component will do it for you.
But if you already have it on the page, it's okay, the script won't be added twice._
