import React from 'react';
import LoginPage from './components/LoginPage';
import { ToastProvider } from '@heroui/react';

function App() {
  return (<div>
  <LoginPage />;
  <ToastProvider placement='top-right' toastProps={{classNames:{
       title:'text-white',
        description:'text-white',
        icon:'text-white'
      }}}  />
  </div>)
}

export default App;