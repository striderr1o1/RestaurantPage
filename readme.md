# RestaurantPage

A modern, single-page restaurant website built with JavaScript and webpack. This project demonstrates modular JS, dynamic DOM manipulation, and asset management for a simple, web app frontend.

## Features
- Dynamic creation of hero section, content, and footer using JavaScript
- Modular code structure with ES6 imports/exports
- Asset management for images and styles via webpack
- custom CSS styling
- Easy navigation between Home, Menu, and About sections

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/striderr1o1/RestaurantPage.git
   ```
2. Navigate to the project directory:
   ```bash
   cd RestaurantPage
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npx webpack serve
```

To build for production:
```bash
npx webpack
```

## Project Structure
```
RestaurantPage/
├── src/
│   ├── home.js
│   ├── index.js
│   ├── menu.js
│   ├── about.js
│   ├── styles
│   ├── template.html
│   └── assets/
│       
├── package.json
├── webpack.config.js
└── ...
```

## Decisions Made
 In the beginning, I was having issue in tab switching. So I fixed the navbar in the html, and created parent Div. When I needed to create something dynamically, I would erase the contents of the parent Div and delete the parent Div. Then it is re-created in the new module (when button clicked), and all the children are appended to the newly created parent div. The classname of the parent div remained same.

## License
This project is licensed under the MIT License.
