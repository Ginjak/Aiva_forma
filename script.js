const textarea = document.getElementById("pastabos");

textarea.addEventListener("input", autoResize);

function autoResize() {
  this.style.height = "auto"; // Reset the height
  this.style.height = this.scrollHeight + "px"; // Set the height to match the content
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the current date
  const now = new Date();
  // Set the time to 12:00
  now.setHours(12, 0, 0, 0);

  // Format the date and time as YYYY-MM-DD HH:MM
  const formattedDate =
    now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);

  // Debug: Log the formatted date to the console
  console.log("Formatted Date:", formattedDate);

  // Select all date pickers and set the placeholder
  const datePickers = document.querySelectorAll(".datetime-picker");
  datePickers.forEach((picker) => {
    picker.placeholder = formattedDate;
  });

  // Initialize Flatpickr on all date pickers
  flatpickr(".datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: formattedDate,
  });
});
