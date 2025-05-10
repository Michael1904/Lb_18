import React from 'react';
import ReactDOM from 'react-dom/client';  // Використовуємо react-dom/client у версії React 18
import './index.css';  // Якщо у тебе є стилі
import App from './App';  // Твій основний компонент

// Створюємо root елемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Використовуємо render() для рендерингу компонента
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
