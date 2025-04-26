# Modern 3D Portfolio Website

A stunning 3D portfolio website built with React, Three.js, and Tailwind CSS. This portfolio showcases your work with interactive 3D elements and modern design.

![Portfolio Screenshot](public/logo.svg)

## Features

- 🎨 Modern and responsive design
- 🖥️ Interactive 3D elements using Three.js
- 📱 Mobile-friendly interface
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MasoudAndiwal/Portfolio-Project.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── desktop_pc/      # 3D model assets
│   └── logo.svg         # Logo
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── canvas/      # Three.js components
│   │   └── ...          # Other components
│   ├── constants/       # Project constants
│   ├── hoc/            # Higher-order components
│   └── utils/          # Utility functions
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information
Edit the following files to customize your portfolio:
- `src/constants/index.js` - Update projects, experiences, and testimonials
- `src/components/About.jsx` - Modify your bio and skills
- `src/components/Contact.jsx` - Update contact information

### Change 3D Models
1. Replace the 3D model in `public/desktop_pc/`
2. Update the model path in `src/components/canvas/Computers.jsx`

### Modify Styling
- Edit `src/styles.js` for global styles
- Modify `tailwind.config.cjs` for Tailwind CSS customization

## Technologies Used

- React.js
- Three.js
- Tailwind CSS
- Framer Motion
- Vite
- Node.js

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Fallow me  - [Masoudandiwal](https://www.truelancer.com/freelancer/masoudandiwal18) - email@example.com

Project Link: [https://github.com/MasoudAndiwal/Portfolio-Project/](https://portfolio-project-bngi-dt42wjcus-masouds-projects-56c1e72b.vercel.app/) 