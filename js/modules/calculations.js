export function calculateSummary(transactions) {
  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    const amount = Number(tx.amount);

    if (tx.type === "income") {
      income += amount;
    } else {
      expense += amount;
    }
  });

  return {
    income,
    expense,
    balance: income - expense
  };
}

export function checkBudget(transactions, budget) {
  let totalExpense = 0;

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      totalExpense += Number(tx.amount);
    }
  });

  return {
    totalExpense,
    remaining: budget - totalExpense,
    exceeded: totalExpense > budget
  };
}