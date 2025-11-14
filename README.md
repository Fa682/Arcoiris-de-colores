# Arcoiris-de-colores
A multi-page "tap-to-fill" SVG coloring book web application designed to help users explore emotions. This project was built from scratch to practice core front-end technologies.

#Core Features
Session-Based User: Asks for a user's name on a registration page and saves it using sessionStorage. The name is automatically cleared when the session (browser tab) is closed.
Dynamic Welcome: Greets the user by name on a custom welcome screen (bienvenida.html).
SVG Coloring Page: A "tap-to-fill" coloring experience. Users can select a color from a palette and click on SVG <path> elements to change their fill color.
Dynamic SVG Loading: The app loads a list of different SVG drawings (e.g., jet.svg, leon.svg) from a JavaScript array.
Page Navigation: A "Next" button on the coloring page cycles through the available drawings, and "Yes/No" buttons guide the user through the app's emotional flow.
Custom Styling: Fully custom-styled pages, buttons, and layouts using modern CSS (including Flexbox and position: absolute for layered designs).

#Tech Stack
HTML5
CSS3 (Flexbox, CSS Selectors, z-index, etc.)
Vanilla JavaScript (ES6+) (Used for DOM manipulation, event listeners, sessionStorage, and loading SVGs with fetch.)
