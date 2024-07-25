const textarea = document.getElementById("pastabos");

textarea.addEventListener("input", autoResize);

function autoResize() {
  this.style.height = "auto"; // Reset the height
  this.style.height = this.scrollHeight + "px"; // Set the height to match the content
}
