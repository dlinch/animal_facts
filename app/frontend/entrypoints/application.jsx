console.log('Vite ⚡️ Rails')

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import 'foundation-sites/dist/css/foundation.min.css';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
