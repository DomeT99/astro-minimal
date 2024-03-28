import { useSignal } from "@preact/signals";
import searchDB from "../../search/index";

export default function SearchBoxOrama() {
  const searchResults = useSignal([]);
  const showModal = useSignal(false);

  async function search(e) {
    const term = e.target.value;
    if (term.length < 2) {
      searchResults.value = [];
      return;
    }
    const results = await searchDB(term);
    searchResults.value = results.map((r) => r.document);
    console.log(searchResults.value);
  }

  function handleModal(isShow) {
    showModal.value = isShow;
    searchResults.value = [];
  }

  return (
    <>
      <svg
        onClick={() => handleModal(true)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="26"
        class="ml-2 tertiary-color pointer"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      {showModal.value && (
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title"></p>
              <button
                onClick={() => handleModal(false)}
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
                onInput={search}
              />
              {searchResults.value.length > 0 ? (
                <ul class="mt-6">
                  <>
                    {searchResults.value.map(({ title, url }) => (
                      <li>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <span>{title}</span>
                        </a>
                      </li>
                    ))}

                    <li>.</li>
                  </>
                </ul>
              ) : (
                <div class="has-text-centered mt-6">
                  <p>Search something...</p>
                </div>
              )}
            </section>
            <footer class="modal-card-foot is-flex is-justify-content-end">
              <p> Powered by </p>
              <a
                href="https://oramasearch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure class="mt-2 ml-1">
                  <img
                    width="80"
                    height="20"
                    src="../../../public/images/logo-orama-light.svg"
                    alt="Orama Logo"
                  />
                </figure>
              </a>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
