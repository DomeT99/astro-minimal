---
title: "Computed Properties 🤙"
description: Vue uses special properties called "Computed properties" to help apps perform best and avoid boring code repetition for developers.
date: 2023-09-09 
---

## Overview

Vue uses special properties called "Computed properties" to help apps perform best and avoid boring code repetition for developers.
In this article you will discover the features behind this incredible properties.

---

## What are Computed Properties?

A Computed property is a variable that contains the return value of a function.
What differentiates this property from simple JavaScript variables are mainly three factors:

- The return value depends on other external variables
- After the calculation is performed, the value is cached
- It's possible reuse this prop in all part of app

```html
<script setup>
  import { reactive, computed } from "vue";

  const wizard = reactive({
    name: "Harry Potter",
    animagus: false,
  });

  const isAnimagus = computed(() => (wizard.animagus ? "Yes" : "No"));
</script>

<template>
  <p>Is {{ wizard.name }} Animagus?</p>
  <span>{{ isAnimagus }}</span>
</template>
```

In the example above we can see how to declare and use a **Computed property**:

<br />

1. import `computed` from Vue library: this is a native API of framework that you must use for declare a Computed Property

2. `computed` takes a callback as a parameter and this callback **MUST** always have a return statement
3. last step binding the variable in HTML template

---

## Computed vs Methods

The Computed property is not dissimilar to the method, in fact it is possible use the method approach and obtain the same result. So what is the difference?

Computed properties are cached based on their reactive dependencies, meaning they are only recomputed when dependencies change, while methods are always calculated.
For this reason, it's recommended use when it's possible.

---

## Writable Computed

By default, Computed properties are getter-only, but it's possible a declare a setter and make Computed a "Writable Computed".

```html
<script setup>
  import { ref, computed } from "vue";

  const name = ref("Harry");
  const surname = ref("Potter");

  const fullName = computed({
    get() {
      return name.value + " " + surname.value;
    },
    set(newValue) {
      [name.value, surname.value] = newValue.toUpperCase();
    },
  });
</script>
```

This approach is not very common, but there're some rare cases that it may be necessary.

---

## Avoid mutating computed value

The returned value from a computed property is derived state. For this reason you don't need to directly modify the return value, it wouldn't make sense!
Computed Properties are reactive and are calculated whenever their dependencies change.

---

## Conclusion

Computed properties are a very important feature of Vue and allow the development of high-performance applications with lower computational costs.
Therefore they are strongly recommended.

