---
title: "Data binding: Directives 🫰"
description: Vue provides a special attribute called "Directive" the reactive changes to the DOM.
date: 2023-09-15 
---

## Overview

Vue provides a special attribute called "Directive" the reactive changes to the DOM.
In this article will explains what is a Directive and how to use it.


## What is a Directive?

As mentioned in the paragraph above, Directive is a special attribute for apply the reactive changes to the DOM.
Is recognizable because is preceded by the character `v-` and Vue provides some Directives like `v-if` or `v-for`.
It's possible create custom Directives, but this an advanced concept.

---

## Arguments

```js
<a v-bind:href="url">Follow me on GitHub</a>
```

In the example above, the `v-bind` directive takes `href` as an argument and is associated with a JavaScript value, in this case a `url` variable.
The structure is:

- `v-bind`, the name of Directive
- `:href`, the name of argument preceded from semicolon
- `url`, the value of binding

When the `url` changes, thanks to `v-bind`, Vue will apply the relative changes to the DOM.

## Dynamic Arguments

It also possible use the power of JavaScript and use a dynamic expression as argument in this way:

```html
<a v-bind:[dynamicArgument]="url">Click here!</a>
```

the argument is wrapped by square brackets and it's a JavaScript expression.
Dynamic arguments are expected to evaluate to a string, with the exception of null. The special value null can be used to explicitly remove the binding.

You have to keep in mind that certain characters such as spaces and quotes, are invalid inside HTML attribute names.

```html
<a v-bind:["link" + dynamicArgument]="url">Click here!</a>
```

This example above **is invalid**.

## Modifiers

There are some Directives, for example `v-on`, that have another attribute: **Modifier**.
They are are special postfixes denoted by a dot which indicate that a directive should be bound in some special way.

For example, it's possible to use `.prevent` on `v-on:submit`, and it will indicate to call `event.preventDefault()` on the triggered event.

```html
<form v-on:submit.prevent="onSubmit"></form>
```

## Shorthand

There are another to declare `v-bind` and `v-on`, shorthand way:

- `v-bind`: this directive is deleted completely in this way:

```html
<a :href="url">Follow me on GitHub</a>
```

- `v-on`: this directive is replaced by `@` in this way:

```html
<form @submit.prevent="onSubmit"></form>
```

---

## Conclusion

Directives are a very important feature of Vue that allow you to manipulate data dynamically.
For this reason it is essential to know in depth.
