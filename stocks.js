// Array to store all submissions (with headers)
let stockData = [["Chemical", "From", "To", "Lot No", "Quantity", "Remarks"]];

// Handle form submission
const submitBtn = document.querySelector("button[type='submit']");
if (submitBtn) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const chemical = document.getElementById("chemical").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const lotno = document.getElementById("lotno").value;
    const quantity = document.getElementById("quantity").value;
    const remarks = document.getElementById("remarks").value;

    if (!chemical || !from || !to || !lotno || !quantity) {
      alert("Please fill all required fields.");
      return;
    }

    stockData.push([chemical, from, to, lotno, quantity, remarks]);

    // Optionally clear the form
    document.getElementById("chemical").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("lotno").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("remarks").value = "";

    alert("Stock entry added!");
  });
}

// Handle Excel download
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(stockData);
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Stocks");

    // Download the file
    XLSX.writeFile(wb, "stocks.xlsx");
  });
}
