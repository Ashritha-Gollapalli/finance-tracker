let pieChart;
let barChart;


// 🔵 PIE CHART → Expenses by Category
export function renderChart(transactions) {
  const ctx = document.getElementById("categoryChart");

  if (!ctx) return; // safety check

  // destroy old chart
  if (pieChart) {
    pieChart.destroy();
  }

  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      const amount = Number(tx.amount);

      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + amount;
    }
  });

  const labels = Object.keys(categoryMap);
  const data = Object.values(categoryMap);

  pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Expenses",
          data: data,
        },
      ],
    },
  });
}


// 🟢 BAR CHART → Income vs Expense
export function renderBarChart(transactions) {
  const ctx = document.getElementById("barChart");

  if (!ctx) return; // safety check

  // destroy old chart
  if (barChart) {
    barChart.destroy();
  }

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

  barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "Amount",
          data: [income, expense],
        },
      ],
    },
  });
}

let lineChart;

export function renderLineChart(transactions) {
  const ctx = document.getElementById("lineChart");

  if (!ctx) return;

  if (lineChart) {
    lineChart.destroy();
  }

  const dateMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      const amount = Number(tx.amount);

      if (dateMap[tx.date]) {
        dateMap[tx.date] += amount;
      } else {
        dateMap[tx.date] = amount;
      }
    }
  });

  // sort dates (important)
  const sortedDates = Object.keys(dateMap).sort();

  const values = sortedDates.map((date) => dateMap[date]);

  lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: sortedDates,
      datasets: [
        {
          label: "Daily Expenses",
          data: values,
          fill: false,
        },
      ],
    },
  });
}