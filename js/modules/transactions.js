export function addTransaction(data, transactions) {
  return [
    ...transactions,
    {
      id: Date.now(),
      ...data
    }
  ];
}

export function deleteTransaction(id, transactions) {
  return transactions.filter((tx) => tx.id !== id);
}