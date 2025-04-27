function generateQRCode(data) {
    const QRCode = require('qrcode');

    return QRCode.toDataURL(data)
        .then(url => {
            return url;
        })
        .catch(err => {
            console.error('Error generating QR Code:', err);
            throw err;
        });
}

module.exports = {
    generateQRCode
};