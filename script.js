(function () {
  var CERTS = {
    riachuelo: {
      title: "Riachuelo — Cibersegurança (DIO) · SKSWWE07",
      img: "certs/riachuelo-1.png",
      foot: "Emitido 17 abr 2026 · 40h · Digital Innovation One"
    },
    solyd: {
      title: "Introdução ao Hacking e Pentest 2.0 · Solyd Offensive Security",
      img: "certs/solyd-1.png",
      foot: "Emitido 16 jan 2025 · 8h · solyd.com.br/verificar/PqhgMe01ih"
    }
  };

  var overlay = document.getElementById("modalOverlay");
  var modalImg = document.getElementById("modalImg");
  var modalTitle = document.getElementById("modalTitle");
  var modalFootLeft = document.getElementById("modalFootLeft");
  var modalDownload = document.getElementById("modalDownload");
  var closeBtn = document.getElementById("modalClose");

  function openCert(key) {
    var c = CERTS[key];
    if (!c) return;
    modalImg.src = c.img;
    modalImg.alt = c.title;
    modalTitle.textContent = c.title;
    modalFootLeft.textContent = c.foot;
    modalDownload.href = c.img;
    modalDownload.setAttribute("download", key + ".png");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCert() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    modalImg.src = "";
  }

  document.querySelectorAll("[data-cert]").forEach(function (el) {
    el.addEventListener("click", function () {
      openCert(el.getAttribute("data-cert"));
    });
  });

  closeBtn.addEventListener("click", closeCert);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeCert();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCert();
  });
})();
