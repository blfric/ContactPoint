import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeWrapper } from 'providers/ThemeWrapper.tsx';
import AppWrapper from 'components/AppWrapper/AppWrapper.tsx';
import { Home } from 'Pages/Home/Home.tsx';
import './providers/i18n/index.ts';
import 'index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeWrapper>
        <BrowserRouter basename='/'>
          <AppWrapper>
            <Routes>
              <Route Component={Home} path='/'/>
            </Routes>
          </AppWrapper>
        </BrowserRouter>
      </ThemeWrapper>
  </React.StrictMode>,
)
