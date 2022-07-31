const input = document.getElementById("searchInput");
const clearInputBtn = document.getElementById("clearInput");

input.addEventListener('input', (e) => {
  if (input.value.length > 0) {
    clearInputBtn.style.display = "block"
  } else {
    clearInputBtn.style.display = "none"
  }
})

function clearSearch() {
  input.value = ""
  input.focus();
}