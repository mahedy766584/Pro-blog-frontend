import { createRoot } from 'react-dom/client'
import './index.css'
import '@ant-design/v5-patch-for-react-19';
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts';
import AppProvider from './AppProvider.tsx';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </PersistGate>
      <Toaster />
    </Provider>
);
