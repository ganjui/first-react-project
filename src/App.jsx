import logo from './logo.svg';
import React from 'react'
import { render } from '@testing-library/react';
import './index.css';
import Footer from './footer';
import Main from './Main';
import Header from './Header';
import TODO  from './Todo';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body className='body'>
      <TODO /> 
      </body>
    </div>
  );
}

export default App;
