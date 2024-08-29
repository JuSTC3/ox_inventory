import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { store } from './store';
import App from './App';
import './index.scss';
import { ItemNotificationsProvider } from './components/utils/ItemNotifications';
import { isEnvBrowser } from './utils/misc';

const root = document.getElementById('root');

if (isEnvBrowser()) {
  // https://i.imgur.com/iPTAdYV.png - Night time img
  // root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  // root!.style.backgroundSize = 'cover';
  // root!.style.backgroundRepeat = 'no-repeat';
  // root!.style.backgroundPosition = 'center';
  root!.style.background = 'radial-gradient(90% 90% at 45% 45%, rgba(10, 15, 20, 0.9), rgba(15, 20, 25, 0.9))';
}

createRoot(root!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <ItemNotificationsProvider>
          <App />
        </ItemNotificationsProvider>
      </DndProvider>
    </Provider>
  </React.StrictMode>
);
