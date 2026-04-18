const STORAGE_KEY = "finance_transactions";

export function saveTransactions(transactions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

export function loadTransactions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
const BUDGET_KEY = "finance_budget";

export function saveBudget(amount) {
  localStorage.setItem(BUDGET_KEY, amount);
}

export function loadBudget() {
  return Number(localStorage.getItem(BUDGET_KEY)) || 0;
}