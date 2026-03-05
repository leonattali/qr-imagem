function gerarQR() {
  const texto = document.getElementById("text").value;
  const qrDiv = document.getElementById("qrcode");

  qrDiv.innerHTML = ""; // limpa QR anterior

  if (!texto) {
    alert("Digite algo!");
    return;
  }

  new QRCode(qrDiv, {
    text: texto,
    width: 200,
    height: 200,
  });
}