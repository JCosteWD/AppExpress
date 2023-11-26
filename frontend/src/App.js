import { Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/Auth/PrivateRoute'
import Accueil from './page/accueil'
import Topbar from "./dashboard/scenes/global/Topbar"
import Sidebar from "./dashboard/scenes/global/Sidebar"
import Dashboard from "./dashboard/scenes/dashboard"
import AddGroup from './dashboard/scenes/group/AddGroup'
import Rounds from './dashboard/scenes/rounds/Rounds'
import Contacts from "./dashboard/scenes/contacts"
import Form from "./dashboard/scenes/form"
import FAQ from "./dashboard/scenes/faq"
import Calendar from "./dashboard/scenes/calendar/calendar"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"
import Groups from './dashboard/scenes/group/Groups'
import AddRounds from './dashboard/scenes/rounds/AddRound'
import AddVehicle from './dashboard/scenes/vehicles/AddVehicle'
import Vehicles from './dashboard/scenes/vehicles/Vehicles'
import Isurance from './dashboard/scenes/insurance/insurance'
import AddInsurance from './dashboard/scenes/insurance/AddInsurance'
import AddPhone from './dashboard/scenes/phone/AddPhone'
import Phones from './dashboard/scenes/phone/Phone'
import Data from './dashboard/scenes/data/data'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          { <Sidebar />}
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Accueil />} /> 

                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/data" element={<Data />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/tours" element={<Rounds />} />
                  <Route path="/vehicles" element={<Vehicles />} />
                  <Route path="/insurances" element={<Isurance />} />
                  <Route path="/phones" element={<Phones />} />
                  <Route path="/addGroup" element={<AddGroup />} />
                  <Route path="/addtour" element={<AddRounds />} />
                  <Route path="/addvehicle" element={<AddVehicle />} />
                  <Route path="/addinsurance" element={<AddInsurance />} />       
                  <Route path="/addphone" element={<AddPhone />} />       
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/user/:id" element={<Form />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Route>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
  }       
  
export default App