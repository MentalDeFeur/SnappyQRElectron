var QRCode = require('qrcode');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('eventForm');
    const validateButton = document.getElementById('validate-button');
    const qrCodeCanvas = document.getElementById('qrCode'); // Assurez-vous que l'ID correspondant    
    if (!form || !validateButton || !qrCodeCanvas) {
        console.error('Required elements are missing in the DOM.');
        return;
    }
    validateButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const title = form.elements['eventTitle'].value;
        var date = form.elements['eventDate'].value;

        if (title && date) {
            const icalEvent = generateICalEvent(title, date);

            // Utilisation de QRCode.toCanvas pour générer le QR code
            QRCode.toCanvas(qrCodeCanvas, icalEvent, (error) => {
                if (error) {
                    console.error('Error generating QR code:', error);
                } else {
                    console.log('QR code generated successfully!');
                }
            });
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

function generateICalEvent(title, date) {
    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART;VALUE=DATE:${date}
END:VEVENT
END:VCALENDAR`;
}