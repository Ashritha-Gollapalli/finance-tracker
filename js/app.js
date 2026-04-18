import { initForm } from "./ui/form.js";
import { addTransaction, deleteTransaction } from "./modules/transactions.js";
import { renderTransactions, renderSummary } from "./ui/render.js";
import { calculateSummary } from "./modules/calculations.js";
import { saveTransactions, loadTransactions } from "./modules/storage.js";
import { renderChart, renderBarChart } from "./ui/chart.js";
import { saveBudget, loadBudget } from "./modules/storage.js";
import { checkBudget } from "./modules/calculations.js";
import { renderBudget } from "./ui/render.js";
import { renderLineChart } from "./ui/chart.js";
let transactions = loadTransactions();
let budget = loadBudget();

// Initial render
renderTransactions(transactions);
renderSummary(calculateSummary(transactions));
renderChart(transactions);
renderChart(transactions);
renderBarChart(transactions);
const status = checkBudget(transactions, budget);
renderBudget(budget, status);
renderLineChart(transactions);

// Add transaction
initForm((data) => {
  transactions = addTransaction(data, transactions);

  saveTransactions(transactions);

  renderTransactions(transactions);
  renderSummary(calculateSummary(transactions));
  renderChart(transactions);
  renderChart(transactions);
renderBarChart(transactions);
const status = checkBudget(transactions, budget);
renderBudget(budget, status);
renderLineChart(transactions);
});


// 🔥 DELETE HANDLER (event delegation)
document.getElementById("transactions").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.dataset.id);

    transactions = deleteTransaction(id, transactions);

    saveTransactions(transactions);

    renderTransactions(transactions);
    renderSummary(calculateSummary(transactions));
    renderChart(transactions);
    const status = checkBudget(transactions, budget);
renderBudget(budget, status);
renderLineChart(transactions);
  }
});

document.getElementById("setBudgetBtn").addEventListener("click", () => {
  const value = Number(document.getElementById("budgetInput").value);

  budget = value;
  saveBudget(budget);

  const status = checkBudget(transactions, budget);
  renderBudget(budget, status);
});