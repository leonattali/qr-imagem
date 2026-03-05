function gerarQR() {

const qrDiv = document.getElementById("qrcode");

qrDiv.innerHTML = "";

new QRCode(qrDiv, {
text: "https://leonattali.github.io/qr-imagem/textov2.html",
width: 200,
height: 200
});

}