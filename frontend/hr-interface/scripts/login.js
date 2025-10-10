document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;

    if (role === "hr") {
      // Redirect to HR Interface
      window.location.href = "../hr-interface/pages/dashboard.html";
    } else if (role === "user") {
      // Redirect to User Interface
      window.location.href = "../user-interface/pages/upload.html";
    } else {
      alert("Please select a role to continue.");
    }
  });
});
