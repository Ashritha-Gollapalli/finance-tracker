export function initForm(handler) {
  const btn = document.getElementById("add-btn");

  btn.addEventListener("click", () => {
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    handler({ amount, type, category, date });
  });
}