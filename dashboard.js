document.addEventListener('DOMContentLoaded', function() {
    // Initialize Pie Chart
    const ctx1 = document.getElementById('case-status-chart').getContext('2d');
    const caseStatusChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Open', 'Closed', 'Pending'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#007bff', '#28a745', '#ffc107']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Update Overview Section
    window.updateOverview = function() {
        // Parse form input values to integers
        const totalCases = parseInt(document.getElementById('total-cases').value, 10) || 0;
        const openCases = parseInt(document.getElementById('open-cases').value, 10) || 0;
        const closedCases = parseInt(document.getElementById('closed-cases').value, 10) || 0;
        const casesDueToday = parseInt(document.getElementById('cases-due-today').value, 10) || 0;

        // Calculate pending cases based on total, open, and closed cases
        const pendingCases = totalCases - (openCases + closedCases);

        // Update Pie Chart with the new data
        caseStatusChart.data.datasets[0].data = [openCases, closedCases, pendingCases];
        caseStatusChart.update();
    };
});
