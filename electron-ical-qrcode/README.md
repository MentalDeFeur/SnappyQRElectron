# Electron iCal QRCode Generator

This project is an Electron application that allows users to create an iCal event and generate a QR code for it. The application provides a simple user interface where users can input event details and validate them to generate the corresponding iCal file and QR code.

## Project Structure

```
electron-ical-qrcode
├── src
│   ├── main.js               # Main entry point of the Electron application
│   ├── renderer.js           # Handles UI logic and user events
│   ├── index.html            # HTML structure of the application
│   ├── styles
│   │   └── style.css         # CSS styles for the application
│   └── utils
│       ├── ical-generator.js  # Generates iCal event files
│       └── qrcode-generator.js # Generates QR codes
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/electron-ical-qrcode.git
   ```

2. Navigate to the project directory:
   ```
   cd electron-ical-qrcode
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Fill in the event details in the provided form.

3. Click on the "Validez" button to generate the iCal event and the corresponding QR code.

## Dependencies

- Electron
- [QRCode library](https://github.com/soldair/node-qrcode) for generating QR codes

## License

This project is licensed under the MIT License.