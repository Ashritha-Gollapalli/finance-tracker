export function renderTransactions(transactions) {
  const container = document.getElementById("transactions");

  container.innerHTML = "";

  if (transactions.length === 0) {
    container.innerHTML = "<p>No transactions yet</p>";
    return;
  }

  transactions.forEach((tx) => {
    const div = document.createElement("div");
    div.classList.add("transaction","fade-in");
    div.classList.add(tx.type === "income" ? "income" : "expense");

    div.innerHTML = `
      <p>${tx.category}</p>
      <p>${tx.type}</p>
      <p>₹${tx.amount}</p>
      <p>${tx.date}</p>
      <button data-id="${tx.id}" class="delete-btn">Delete</button>
    `;

    container.appendChild(div);
  });
}
export function renderSummary(summary) {
  document.getElementById("income").textContent = summary.income;
  document.getElementById("expense").textContent = summary.expense;
  document.getElementById("balance").textContent = summary.balance;
}

export function renderBudget(budget, status) {
  document.getElementById("budgetValue").textContent = budget;

  const statusEl = document.getElementById("budgetStatus");

  if (budget === 0) {
    statusEl.textContent = "";
    return;
  }

  if (status.exceeded) {
    statusEl.textContent = `⚠️ Budget exceeded by ₹${Math.abs(status.remaining)}`;
    statusEl.style.color = "red";
  } else {
    statusEl.textContent = `Remaining: ₹${status.remaining}`;
    statusEl.style.color = "green";
  }
}
