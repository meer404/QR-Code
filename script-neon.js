let qrCode;

    function generateQRCode() {
      const text = document.getElementById("text").value.trim();
      const qrCodeDiv = document.getElementById("qrcode");
      const downloadBtn = document.getElementById("download");

      if (!text) {
        alert("Please enter some text or a URL.");
        return;
      }

      qrCodeDiv.innerHTML = "";

      qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#00ffff",
        colorLight: "#000000",
        correctLevel: QRCode.CorrectLevel.H
      });

      downloadBtn.classList.remove("d-none");
    }

    function downloadQRCode() {
      const img = document.querySelector("#qrcode img");
      if (img) {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "qrcode.png";
        link.click();
      } else {
        const canvas = document.querySelector("#qrcode canvas");
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "neon-qrcode.png";
        link.click();
      }
    }