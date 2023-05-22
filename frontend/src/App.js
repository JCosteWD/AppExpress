import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
/* import Dashboard from './page/dashboard'; */
import Accueil from './page/accueil';

import { useState } from "react";
import Topbar from "./dashboard/scenes/global/Topbar";
import Sidebar from "./dashboard/scenes/global/Sidebar";
import Dashboard from "./dashboard/scenes/dashboard";
import Team from "./dashboard/scenes/team";
import Invoices from "./dashboard/scenes/invoices";
import Contacts from "./dashboard/scenes/contacts";
import Bar from "./dashboard/scenes/bar";
import Form from "./dashboard/scenes/form";
import Line from "./dashboard/scenes/line";
import Pie from "./dashboard/scenes/pie";
import FAQ from "./dashboard/scenes/faq";
import Geography from "./dashboard/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./dashboard/scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/team" element={<Team />} />
                    <Route path="/dashboard/contacts" element={<Contacts />} />
                    <Route path="/dashboard/invoices" element={<Invoices />} />
                    <Route path="/dashboard/form" element={<Form />} />
                    <Route path="/dashboard/bar" element={<Bar />} />
                    <Route path="/dashboard/pie" element={<Pie />} />
                    <Route path="/dashboard/line" element={<Line />} />
                    <Route path="/dashboard/faq" element={<FAQ />} />
                    <Route path="/dashboard/calendar" element={<Calendar />} />
                    <Route path="/dashboard/geography" element={<Geography />} />

                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Route>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  );
};

export default App;