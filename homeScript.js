
const loader = document.getElementById('loader');
const main = document.getElementById('main-R');

(function () {
  setTimeout(() => {
    try {
      loader.style.opacity = 0;
      loader.style.display = 'none';
      main.style.display = 'block';
    }
    catch { console.log("Loading Error") }
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
})();