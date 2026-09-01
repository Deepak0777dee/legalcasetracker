/* ============================================
   CHARTS.JS — Stackly Legal Case Analytics
   Chart.js initializations for all dashboard pages
   ============================================ */

const CHART_COLORS = {
  primary: '#1a3c5e',
  primaryLight: '#2a5a8a',
  accent: '#2cb5a0',
  accentLight: '#5dd9c5',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  purple: '#8b5cf6',
  pink: '#ec4899',
  gray: '#64748b',
  orange: '#f97316'
};

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 16,
        font: { size: 11, family: "'Inter', sans-serif" }
      }
    }
  }
};

/* ---- Dashboard Page Charts ---- */
function initDashboardCharts() {
  // Case Trends Line
  const trendCtx = document.getElementById('trendChart');
  if (trendCtx) {
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Cases Filed',
            data: [42, 58, 65, 78, 92, 86, 105, 118],
            borderColor: CHART_COLORS.primary,
            backgroundColor: 'rgba(26, 60, 94, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.primary
          },
          {
            label: 'Cases Resolved',
            data: [35, 42, 55, 68, 75, 82, 90, 98],
            borderColor: CHART_COLORS.accent,
            backgroundColor: 'rgba(44, 181, 160, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.accent
          }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Case Types Doughnut
  const typeCtx = document.getElementById('typeChart');
  if (typeCtx) {
    new Chart(typeCtx, {
      type: 'doughnut',
      data: {
        labels: ['Corporate', 'Criminal', 'IP/Patent', 'Family', 'Employment', 'Real Estate'],
        datasets: [{
          data: [28, 18, 22, 14, 10, 8],
          backgroundColor: [
            CHART_COLORS.primary, CHART_COLORS.accent, CHART_COLORS.info,
            CHART_COLORS.purple, CHART_COLORS.warning, CHART_COLORS.pink
          ],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }

  // Resolution Rate Bar
  const resCtx = document.getElementById('resolutionChart');
  if (resCtx) {
    new Chart(resCtx, {
      type: 'bar',
      data: {
        labels: ['Settlement', 'Verdict', 'Dismissed', 'Mediation', 'Arbitration', 'Ongoing'],
        datasets: [{
          label: 'Cases',
          data: [45, 22, 15, 28, 12, 32],
          backgroundColor: CHART_COLORS.accent,
          borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Workload Area
  const workCtx = document.getElementById('workloadChart');
  if (workCtx) {
    new Chart(workCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Hours Logged',
          data: [8.5, 9.2, 7.8, 10.1, 8.9, 4.2, 2.1],
          borderColor: CHART_COLORS.info,
          backgroundColor: 'rgba(59, 130, 246, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.info
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + 'h', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Analytics Page Charts ---- */
function initAnalyticsCharts() {
  // Monthly Overview Bar
  const monthlyCtx = document.getElementById('monthlyChart');
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Filed', data: [42, 58, 65, 78, 92, 86, 105, 118],
            backgroundColor: CHART_COLORS.primary, borderRadius: 4, barPercentage: 0.6
          },
          {
            label: 'Resolved', data: [35, 42, 55, 68, 75, 82, 90, 98],
            backgroundColor: CHART_COLORS.accent, borderRadius: 4, barPercentage: 0.6
          }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Jurisdiction Breakdown Horizontal Bar
  const jurisCtx = document.getElementById('jurisdictionChart');
  if (jurisCtx) {
    new Chart(jurisCtx, {
      type: 'bar',
      data: {
        labels: ['Federal Court', 'State Supreme', 'District Court', 'Appeals Court', 'Family Court', 'Tax Court', 'Bankruptcy'],
        datasets: [{
          label: 'Cases',
          data: [48, 35, 62, 28, 41, 15, 22],
          backgroundColor: CHART_COLORS.primary, borderRadius: 4
        }]
      },
      options: {
        ...CHART_DEFAULTS, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Win/Loss Pie
  const winCtx = document.getElementById('winLossChart');
  if (winCtx) {
    new Chart(winCtx, {
      type: 'pie',
      data: {
        labels: ['Won', 'Lost', 'Settled', 'Pending'],
        datasets: [{
          data: [42, 15, 28, 15],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.danger, CHART_COLORS.accent, CHART_COLORS.gray],
          borderWidth: 0
        }]
      },
      options: { ...CHART_DEFAULTS }
    });
  }

  // Settlement Trends Line
  const settleCtx = document.getElementById('settlementChart');
  if (settleCtx) {
    new Chart(settleCtx, {
      type: 'line',
      data: {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
        datasets: [{
          label: 'Avg Settlement ($K)',
          data: [125, 142, 158, 135, 168, 182, 195],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '$' + v + 'K', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Billing Page Charts ---- */
function initBillingCharts() {
  // Revenue Trend
  const revCtx = document.getElementById('revenueChart');
  if (revCtx) {
    new Chart(revCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Revenue ($)',
          data: [85000, 92000, 88000, 105000, 118000, 112000, 128000, 145000],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 3, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '$' + (v/1000) + 'k', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Hours Logged Bar
  const hoursCtx = document.getElementById('hoursChart');
  if (hoursCtx) {
    new Chart(hoursCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          { label: 'Billable', data: [420, 480, 445, 520, 560, 530, 610, 650], backgroundColor: CHART_COLORS.accent, borderRadius: 4 },
          { label: 'Non-Billable', data: [80, 95, 88, 102, 110, 98, 120, 135], backgroundColor: CHART_COLORS.gray, borderRadius: 4 }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, stacked: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Invoice Status Doughnut
  const invoiceCtx = document.getElementById('invoiceChart');
  if (invoiceCtx) {
    new Chart(invoiceCtx, {
      type: 'doughnut',
      data: {
        labels: ['Paid', 'Pending', 'Overdue', 'Draft'],
        datasets: [{
          data: [65, 18, 8, 9],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.warning, CHART_COLORS.danger, CHART_COLORS.gray],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }
}
