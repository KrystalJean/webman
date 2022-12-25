const date = new Date();
const lastScan = document.querySelectorAll('.last-scan');
lastScan.forEach((lastScanText) => {
    lastScanText.innerText = 'last scan: ' + date;
})