const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    alert("Menjelajahi koleksi novel lengkap...");
    window.location.href = "books.html";
  });
}

const toggleMode = document.getElementById("toggleMode");
if (toggleMode) {
  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
    document.body.classList.toggle("bg-light");
    document.body.classList.toggle("text-dark");
  });
}
