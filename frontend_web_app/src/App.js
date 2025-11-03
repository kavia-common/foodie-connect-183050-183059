import React from 'react';
import './App.css';
import './styles/global.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.jsx';
import { store } from './state/store';
import './i18n';

function AppShell() {
  return (
    <div className="app-shell">
      <AppRouter />
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Root component mounting providers: Redux, Router, i18n (initialized on import). */
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
