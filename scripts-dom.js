// const refresh = document.getElementById("myBtn");
// function reloadPage() {
//     location.reload();
// }
// refresh.addEventListener("click", run);

// const date = new Date();
const lastScan = document.querySelectorAll('.last-scan');
lastScan.forEach((lastScanText) => {
    lastScanText.innerText = 'last scan: ' + Date();
})