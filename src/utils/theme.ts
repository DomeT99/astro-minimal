export function getTheme() {
  let storage = _getStorage();
  if (storage !== null) {
    document.querySelector("html")?.setAttribute("data-theme", storage!);
  }
}

export function setTheme() {
  let html = document.querySelector("html")?.getAttribute("data-theme");

  if (html == "dark") {
    document.querySelector("html")?.setAttribute("data-theme", "light");
    _setStorage("light");
  } else if (html == "light") {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    _setStorage("dark");
  }
}

function _setStorage(value: string) {
  localStorage.setItem("theme", value);
}

function _getStorage() {
  return localStorage.getItem("theme");
}