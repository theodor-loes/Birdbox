# Birdhouse IoT Camera Project

This project combines an ESP8266 microcontroller, an Arducam Mega camera module, and a simple web application to monitor and stream live video of birds nesting in a birdhouse.

## Project Goals

This project is primarily intended as an educational experience, helping me learn and practice:

- Building and programming IoT devices
- Creating and deploying Node.js applications
- Web development fundamentals, including HTML, CSS, and JavaScript
- Managing and deploying web applications

## Technologies Used

- **ESP8266:** Provides wireless connectivity and controls the camera module.
- **Arducam Mega:** Captures images and streams video.
- **Node.js:** Serves as the backend, managing the data flow and providing a web server.
- **HTML/CSS/JavaScript:** Used for frontend development to display live camera feeds and manage user interaction.

## Setup and Installation

To get started with this project:

1. Clone this repository:
   ```bash
   git clone https://github.com/theodor-loes/Birdbox.git
2. Install dependencies:
   ```bash
   npm install express http-proxy-middleware
3. Flash ESP8266 with provided firmware and connect the Arducam module (see pinout <a href="https://docs.arducam.com/Arduino-SPI-camera/MEGA-SPI/MEGA-Quick-Start-Guide/#general-introduction">here</a>).
4. Start the Node.js server:
   ```bash
   node server.js
5. Open your browser and visit http://localhost:3000 to view the live camera feed.

## Future Improvements

Potential improvements include:
- Enhancing the web UI for better user interaction
- Implementing real-time notifications upon bird detection
- Recording and archiving video segments

## Conclusion

This project provided hands-on experience with IoT, web development, and deployment processes, establishing a solid foundation for future projects involving similar technology stacks.
