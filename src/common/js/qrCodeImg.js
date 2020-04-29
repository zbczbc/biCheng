import QR from "./qrcode.js";

function getQRCodeSize() {
  var size = 0;
  var scale = 750 / 278; //不同屏幕下QRcode的适配比例；设计稿是750宽
  var width = window.innerWidth / scale;
  size = parseInt(width.toString());
  return size;
}

export const createQrCodeImg = ({ text, qrcodeSize }) => {
  let size = qrcodeSize ? qrcodeSize : getQRCodeSize();
  let img = QR.createQrCodeImg(text, {
    size
  });
  console.log(img)
  return img;
};
