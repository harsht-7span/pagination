let users = [];
let isEdit = false;

let currentIndex = 1;
let currentPage = 1;
let limit = 10;

const pageIndex = document.getElementById("pages");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

next.addEventListener("click", function () {
  let pages = Math.ceil(users.length / limit);
  if (currentPage < pages) {
    currentPage++;
    updatePagination();
  }
});

function updatePagination() {
  let pages = Math.ceil(users.length / limit);

  pageIndex.textContent = currentPage + "-" + pages;

  if (currentPage <= 1) {
    prev.classList.add("opacity-50");
    prev.setAttribute("disabled", "");
  } else {
    document.body.style.backgroundColor = "white";
    prev.classList.remove("opacity-50");
    prev.removeAttribute("disabled");
  }

  if (currentPage >= pages) {
    next.classList.add("opacity-50");
    next.setAttribute("disabled", "");
  } else {
    next.classList.remove("opacity-50");
    next.removeAttribute("disabled");
  }

  savePages();
  displayUsers();
}

function savePages() {
  const userPages = {
    currentPage: currentPage,
    limit: limit,
  };
  localStorage.setItem("userPages", JSON.stringify(userPages));
}

const savedUsers = localStorage.getItem("users");

window.onload = function () {
  savePages();
  if (savedUsers) {
    users = JSON.parse(savedUsers);
    displayUsers();
  }
};

function saveUser() {
  localStorage.setItem("users", JSON.stringify(users));
}

function addUser(e) {
  // console.log("user");

  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const mobile = document.getElementById("mobile").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const pincode = document.getElementById("pincode").value;
  const bio = document.getElementById("bio").value;

  const user = {
    id: users?.length + 1,
    name,
    email,
    gender,
    mobile,
    country,
    city,
    state,
    pincode,
    bio,
  };
  users.push(user);

  saveUser();
  document.getElementById("user-form").reset();
  displayUsers();
  currentIndex++;
}

function displayUsers(searchedUsers = users) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  let paginatedData = [...searchedUsers].slice(
    limit * (currentPage - 1),
    limit * currentPage
  );

  paginatedData.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `

    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.gender}</td>
    <td>${user.mobile}</td>
    <td>${user.country}</td>
    <td>${user.state}</td>
    <td>${user.city}</td>
    <td class="flex gap-5 justify-evenly items-center">
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
    </td>
    `;
    tbody.appendChild(row);
  });
}

function editUser(index) {
  if (isEdit) {
    alert("please edit the current user");
    return;
  }

  isEdit = true;

  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.querySelector(
    `input[name="gender"][value="${user.gender}"]`
  ).checked = true;
  document.getElementById("mobile").value = user.mobile;
  document.getElementById("country").value = user.country;
  document.getElementById("city").value = user.city;

  document.getElementById("state").value = user.state;

  document.getElementById("bio").value = user.bio;
  document.getElementById("pincode").value = user.pincode;

  // deleteUser(index);
  currentIndex = index;
}

function deleteUser(index) {
  users.splice(index, 1);

  saveUser();
  displayUsers();
}

function searchUsers() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const searchedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search)
  );
  // console.log(searchUsers);
  currentPage = 1; // Reset current page to 1 when performing a search
  displayUsers(searchedUsers);
}

const selectedCountry = document.getElementById("country-table");
const selectedState = document.getElementById("state-table");
const selectedCity = document.getElementById("city-table");

function filterCountry(e) {
  const searchedUsers = users.filter((user) => {
    console.log(
      selectedCountry.value ? user.country == selectedCountry.value : true,
      selectedState.value ? user.state == selectedState.value : true,
      selectedCity.value ? user.city == selectedCity.value : true
    );
    return (
      (selectedCountry.value ? user.country == selectedCountry.value : true) &&
      (selectedState.value ? user.state == selectedState.value : true) &&
      (selectedCity.value ? user.city == selectedCity.value : true)
    );
  });

  console.log(searchedUsers);
  // console.log(selectedCountry.value);
  // console.log(selectedState.value);
  // console.log(selectedCity.value);

  displayUsers(searchedUsers);
}

document
  .getElementById("country-table")
  .addEventListener("change", filterCountry);

document
  .getElementById("state-table")
  .addEventListener("change", filterCountry);

document.getElementById("city-table").addEventListener("change", filterCountry);
