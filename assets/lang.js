// Bilingual switch (FR / EN). Choice is remembered in the browser.
(function () {
  var root = document.documentElement;

  function getInitial() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "fr" || param === "en") return param;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    var t = root.getAttribute("data-title-" + lang);
    if (t) document.title = t;
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) btns[i].textContent = lang === "fr" ? "EN" : "FR";
    // Numbers: French format (21,5 %) -> English format (21.5%)
    var nums = document.querySelectorAll(".stat .value, td.num");
    for (var j = 0; j < nums.length; j++) {
      var el = nums[j];
      if (el.children.length) continue;
      if (!el.hasAttribute("data-fr")) el.setAttribute("data-fr", el.textContent);
      var fr = el.getAttribute("data-fr");
      el.textContent = lang === "fr" ? fr : fr.replace(/(\d),(\d)/g, "$1.$2").replace(/\s%/g, "%");
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  apply(getInitial());

  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".lang-btn")) {
      apply(root.getAttribute("data-lang") === "fr" ? "en" : "fr");
    }
  });
})();
