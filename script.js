const incomeInput = document.getElementById('income');
let budgetChart;

window.onload = () => {
    const savedIncome = localStorage.getItem('monthlyIncome');
    if (savedIncome) {
        incomeInput.value = savedIncome;
        updateDashboard(savedIncome);
    }
};

incomeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    localStorage.setItem('monthlyIncome', value);
    updateDashboard(value);
});

function updateDashboard(income) {
    const survival = income * 0.50;
    const comforts = income * 0.30;
    const fortification = income * 0.20;

    document.getElementById('survival').innerText = survival.toFixed(2);
    document.getElementById('comforts').innerText = comforts.toFixed(2);
    document.getElementById('fortification').innerText = fortification.toFixed(2);

    updateChart([survival, comforts, fortification]);
}

function updateChart(data) {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    if (budgetChart) budgetChart.destroy();
    budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Survival', 'Comforts', 'Fortification'],
            datasets: [{ data: data, backgroundColor: ['#34495e', '#95a5a6', '#d4af37'] }]
        },
        options: { plugins: { legend: { display: false } } }
    });
}
