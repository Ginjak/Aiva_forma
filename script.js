// Prdine data yra siandienos data nuo 12:00 val
document.addEventListener("DOMContentLoaded", function () {
  const now = new Date();
  now.setHours(12, 0, 0, 0);

  const formattedDate =
    now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);

  // const datePickers = document.querySelectorAll(".datetime-picker");
  // datePickers.forEach((picker) => {
  //   picker.placeholder = formattedDate;
  // });
  flatpickr(".datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    onChange: function (selectedDates, dateStr, instance) {
      const inputId = instance.input.id;
      if (inputId === "datetime-picker-start") {
        document.getElementById("faktinis-pradzia").value = dateStr;
      } else if (inputId === "datetime-picker-end") {
        document.getElementById("faktinis-pabaiga").value = dateStr;
      }
    },
  });
});

// Pastabos textarea expansion
const textarea = document.getElementById("pastabos");

textarea.addEventListener("input", autoResize);

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px"; //
}
