// Handle Stockes button click
const stocksBtn = document.getElementById("stocks-btn");
if (stocksBtn) {
  stocksBtn.addEventListener("click", function () {
    window.location.href = "stocks.html";
  });
}

// You can add similar handlers for the other buttons if needed
// Example:
// document.getElementById('building-stock-btn').addEventListener('click', function() { ... });
// document.getElementById('chemical-validity-btn').addEventListener('click', function() { ... });
