---
title: "Conditional rendering: v-if vs v-show 🫴"
description: In some cases it happens that you want to render certain portions of software according to certain conditions.
date: 2023-09-19 
---

## Overview

In some cases it happens that you want to render certain portions of software according to certain conditions.
In this article will explains what is Conditional rendering and how Vue handle it.


## What is Conditional rendering?

Conditional rendering is the rendering of a portion of software based on a certain condition that can changes over time.
Not only does Vue have this feature, but also other frontend frameworks like React and Angular. The difference is the way it is managed.
In Vue there are two ways: `v-if` and `v-show`, two native Directives of the framework.

---

## How works v-if?

The `v-if` directive is used simply to conditionally render a block. The block will be rendered only if the directive expression returns a true value.

```html
<h1 v-if="isTrue">Follow me on GitHub: DomeT99</h1>
```

`v-if` takes simply as condition a JavaScript expression.
It's possible indicate an "else block" with another Directive: `v-else`.

```html
<h1 v-if="isTrue">Follow me on GitHub: DomeT99</h1>
<h1 v-else>Or dev.to: Domenico Tenace</h1>
```

If `isTrue` condition is false, `v-else` render the second title.
Exists another Directive that indicate "else if block" and is called `v-else-if`.

```html
<div v-if="social === 'GitHub'">Follow me on GitHub: DomeT99</div>
<div v-else-if="social === 'dev.to'">Follow me on dev.to: Domenico Tenace</div>
<div v-else>Visit my Linktree for more links: linktree.com/domenicotenace</div>
```

`v-if` also support the `<template>` element for wrapper more HTML tags to render.

## How works v-show?

Another way to use conditional rendering is another directive called "v-show" and it's not that different from `v-if` on the surface.

```html
<h1 v-show="isTrue">Follow me on GitHub: DomeT99</h1>
```

Whether you use `v-if` or `v-show` the final result in this case will be the same.
So what's the difference between the two?
The key difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the display CSS property of the element.

`v-show` doesn't support the `template` element, nor does it work with `v-else`.

---

## v-if vs v-show

`v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created.
It's lazy, infact if the condition is false on initial render, it will not do anything the conditional block won't be rendered until the condition becomes true for the first time.

`v-show` is much simpler, the element is always rendered regardless of initial condition, with CSS-based toggling.

In general, `v-if` has higher toggle costs while `v-show` has higher initial rendering costs. So it is preferable to use `v-show` if you need to activate something very often and `v-if` if the condition is unlikely to change at run time.

## Conclusion

These are the ways in which Vue handles Conditional Rendering, which can be expensive when rendering with `v-show` and more expensive when toggle with `v-if`.
They must be used in the right contexts.
