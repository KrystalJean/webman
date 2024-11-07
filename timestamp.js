function getTimestamp() {
    const lastScan = document.querySelectorAll('.last-scan');

    lastScan.forEach((lastScanText) => {
        lastScanText.innerText = new Date().toLocaleString();
    })
}

getTimestamp();