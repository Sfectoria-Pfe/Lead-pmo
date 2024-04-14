import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashborad";
import Topbar from '../src/pages/global/topbar';
import Sidebar from "./pages/global/sidebar";

import Team from "../src/pages/team/team";
import Calendar from './pages/calendar/calendar';
import FAQ from "../src/pages/faq/faq";
import Form from "../src/pages/form/form";
import Boards from './pages/boards/board';
import Contact from './pages/contact/contact';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/boards" element={<Boards/>} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
   
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
