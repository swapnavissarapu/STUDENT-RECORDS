// script.js
const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rollNo = document.getElementById("rollNo").value.trim();

  if (name && email && rollNo) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${rollNo}</td>
      <td>
        <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
    form.reset();
  }
});

tableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
  }
});
