document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uploadForm");
  const resultBox = document.getElementById("resultBox");
  const matchScore = document.getElementById("matchScore");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulate backend processing
    const randomScore = Math.floor(Math.random() * 30) + 70; // 70–99%
    matchScore.textContent = randomScore + "%";
    resultBox.classList.remove("hidden");
  });
});
