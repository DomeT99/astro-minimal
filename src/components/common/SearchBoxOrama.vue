<script setup lang="ts">
import { ref } from "vue";
import searchDB from "../../search/index";
import oramaLightLogo from "../../../public/images/logo-orama-light.svg";
import oramaDarkLogo from "../../../public/images/logo-orama-dark.svg";

const searchResults = ref<any>([]);
const showModal = ref(false);
const oramaLogo = ref("");

async function search(e: any) {
  const term = e.target.value;
  if (term.length < 2) {
    searchResults.value = [];
    return;
  }
  const results = await searchDB(term);
  searchResults.value = results.map((r) => r.document);
}

function handleModal(isShow: boolean) {
  showModal.value = isShow;
  searchResults.value = [];
  _handleOramaLogo();
}

function _handleOramaLogo() {
  if (document.querySelector("html")?.getAttribute("data-theme") == "dark") {
    oramaLogo.value = oramaDarkLogo.src;
  } else if (
    document.querySelector("html")?.getAttribute("data-theme") == "light"
  ) {
    oramaLogo.value = oramaLightLogo.src;
  }
}
</script>
<template>
  <svg
    @click="handleModal(true)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="26"
    class="ml-2 search-icon pointer"
  >
    <path
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>

  <template v-if="showModal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"></p>
          <button
            @click="() => handleModal(false)"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <input
            id="search-bar"
            type="text"
            class="input"
            placeholder="Search..."
            @input="search"
          />
          <template v-if="searchResults.length > 0">
            <ul class="mt-6 pl-2">
              <li class="mt-4" v-for="result in searchResults">
                <a :href="result.url" target="_blank" rel="noopener noreferrer">
                  <h6>{{ result.title }}</h6>
                </a>
                <p>{{ result.description }}</p>
              </li>
            </ul>
          </template>
          <template v-else>
            <div class="has-text-centered mt-6">
              <p>Search something...</p>
            </div>
          </template>
        </section>
        <footer class="modal-card-foot is-flex is-justify-content-end">
          <p>Powered by</p>
          <a
            href="https://oramasearch.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure class="mt-2 ml-1">
              <img
                id="orama-logo"
                width="80"
                height="20"
                alt="Orama Logo"
                :src="oramaLogo"
              />
            </figure>
          </a>
        </footer>
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss">
@use "../../assets/style/utils/mixins.scss";
@import "../../assets/style/utils/colors.scss";

h6 {
  @include mixins.generate-font("Prompt", bold, 1.3rem);
  @extend .quaternary-color;
}

p {
  @include mixins.generate-font("Prompt", normal, 1.1rem);
  @extend .quinary-color;
}

a {
  @include mixins.generate-font("Prompt", normal, 1.1rem);
  @extend .quinary-color;
}

ul {
  list-style: none;
}
img {
  margin-top: 0;
}
p {
  line-height: 2rem;
}
</style>
