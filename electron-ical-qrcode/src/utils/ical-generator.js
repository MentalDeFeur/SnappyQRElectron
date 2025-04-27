function generateICalEvent(eventDetails) {
    const { summary, location, description, startDate, endDate } = eventDetails;

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${generateUID()}
DTSTAMP:${formatDate(new Date())}
DTSTART:${start}
DTEND:${end}
SUMMARY:${summary}
LOCATION:${location}
DESCRIPTION:${description}
END:VEVENT
END:VCALENDAR`;
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
}

function generateUID() {
    return 'event-' + Math.random().toString(36).substr(2, 16);
}

export { generateICalEvent };