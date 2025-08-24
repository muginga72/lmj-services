📦 lmj-services

A modular React + Vite application for managing service requests, scheduling, and sharing. Built for speed, clarity, and educational impact—with dynamic UI feedback, reusable components, and backend integration via Ruby on Rails.

🚀 Features

  • ⚡️ Vite-powered React app with Hot Module Replacement (HMR)
  • 🧩 Modular service cards with modal interactions
  • 🗂 Accordion view for compact service browsing
  • 🧠 Form validation and dynamic placeholders
  • 🔗 Backend-ready for Ruby on Rails API
  • ✅ ESLint with recommended rules for clean code

🛠 Tech Stack

Layer	Technology	
  Frontend	  React + Vite	
  Styling	    React Bootstrap	
  State Mgmt	useState / useEffect	
  Backend	Ruby on Rails (API)	
  Database	PostgreSQL / MongoDB	
  Linting	    ESLint + Prettier	

📁 Project Structure

lmj-services/
├── public/
├── src/
│   ├── components/
│   │   ├── ServiceCardWithModals.jsx
│   │   ├── ServiceAccordionWithModals.jsx
│   │   └── SunCarePromo.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.js
├── vite.config.js
└── README.md

⚙️ Getting Started

# Clone the repo
  git clone https://github.com/your-username/lmj-services.git
  cd lmj-services

# Install dependencies
  npm install

# Start development server
  npm run dev

🔌 Vite Plugin Options

You can choose between two official plugins for React Fast Refresh:

  Babel-based (default)

  npm install @vitejs/plugin-react --save-dev

SWC-based (faster builds)

  npm install @vitejs/plugin-react-swc --save-dev

Update `vite.config.js` accordingly:

  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'

  export default defineConfig({
    plugins: [react()],
  })

🧹 ESLint Configuration

Basic ESLint setup is included. For production-grade linting:

  npm install eslint eslint-plugin-react eslint-plugin-react-hooks --save-dev

If using TypeScript:

  npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

Update `.eslintrc.js`:

  module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      // your custom rules
    },
  };

🔗 Backend Integration (Rails)

To connect with your Ruby on Rails backend:

1. Enable CORS in Rails (`rack-cors`)
2. Create API endpoints:• `POST /api service_requests`
  • `POST /api/service_schedules`
  • `POST /api/service_shares`

3. Use `fetch` or `axios` in React to send form data
4. Add success/error feedback to modals

📦 Deployment

For production builds:

  npm run build

Then serve with your preferred static host (e.g. Netlify, Vercel, or Rails asset pipeline).

🧠 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

📜 License

MIT