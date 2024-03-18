const users = localStorage.getItem("users");

const use = JSON.parse(users);

// console.log(users.length);

const pages = document.getElementById("pages");

if (use.length > 9) {
  const page = document.createElement("button");
  page.textContent = "1";
  pages.appendChild(page);
}
