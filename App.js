const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    alert("please enter a url");
  } else {
    generateQRCode(url, size);
    // Generate the save button after the qr code image src is ready
    setTimeout(() => {
      // Get save url
      const saveUrl = qr.querySelector("img").src;
      // Create save button
      createSaveBtn(saveUrl);
    }, 50);
  }
};
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};
const clearUI = () => {
  qr.innerHTML = "";
  const saveBtn = document.getElementById("save-link");
  if (saveBtn) {
    saveBtn.remove();
  }
};
//create save button to download qr code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};
form.addEventListener("submit", onGenerateSubmit);
