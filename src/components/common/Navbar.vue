<script setup lang="ts">
import { onMounted, ref } from "vue";

function openBurger() {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  $navbarBurgers.forEach((element) => {
    element.addEventListener("click", () => {
      const target = element.dataset.target;
      const $target = document.getElementById(target) as HTMLElement;

      element.classList.toggle("is-active");

      $target.classList.toggle("is-active");
    });
  });
}

onMounted(() => {
  openBurger();
});
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <p class="f-size-17">DOMENICO TENACE</p>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-id"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-id" class="navbar-menu">
      <div class="navbar-end">
        <a href="/about" class="navbar-item f-600">ABOUT</a>
        <a href="/blog" class="navbar-item f-600"> BLOG</a>
        <a href="/blog" class="navbar-item f-600"> PROJECTS</a>
        <a href="/opensource" class="navbar-item f-600">OPEN SOURCE</a>
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-rounded">☀️</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
