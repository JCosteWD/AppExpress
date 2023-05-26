import {  Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/Auth/PrivateRoute'
import Accueil from './page/accueil'
import { useState } from "react"
import Topbar from "./dashboard/scenes/global/Topbar"
import Sidebar from "./dashboard/scenes/global/Sidebar"
import Dashboard from "./dashboard/scenes/dashboard"
import Team from "./dashboard/scenes/team"
import Invoices from "./dashboard/scenes/invoices"
import Contacts from "./dashboard/scenes/contacts"
import Bar from "./dashboard/scenes/bar"
import Form from "./dashboard/scenes/form"
import Line from "./dashboard/scenes/line"
import Pie from "./dashboard/scenes/pie"
import FAQ from "./dashboard/scenes/faq"
import Geography from "./dashboard/scenes/geography"
import Calendar from "./dashboard/scenes/calendar/calendar"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                  </Route>
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App