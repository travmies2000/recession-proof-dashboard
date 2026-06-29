function calculateBudget() {
    const income = document.getElementById('income').value;
    
    // Logic for the 50/30/20 defensive budget
    const survival = income * 0.50;
    const comforts = income * 0.30;
    const fortification = income * 0.20;
    
    document.getElementById('survival').innerText = survival.toFixed(2);
    document.getElementById('comforts').innerText = comforts.toFixed(2);
    document.getElementById('fortification').innerText = fortification.toFixed(2);
}
