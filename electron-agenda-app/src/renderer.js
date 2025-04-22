const { QRCode } = require('qrcode');

document.getElementById('validateButton').addEventListener('click', () => {
    const appointmentName = document.getElementById('appointmentName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    if (appointmentName && appointmentDate) {
        const icalData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${appointmentName}
DTSTART:${appointmentDate}
END:VEVENT
END:VCALENDAR`;

        QRCode.toCanvas(document.getElementById('qrcode'), icalData, (error) => {
            if (error) console.error(error);
            console.log('QR Code generated!');
        });
    } else {
        alert('Please fill in all fields.');
    }
});