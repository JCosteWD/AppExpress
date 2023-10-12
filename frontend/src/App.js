import { Routes, Route/* , useLocation  */} from 'react-router-dom'
/* import Cookies from 'js-cookie' */
import PrivateRoute from './components/Auth/PrivateRoute'
import Accueil from './page/accueil'
/* import { useState, useEffect } from "react" */
import Topbar from "./dashboard/scenes/global/Topbar"
import Sidebar from "./dashboard/scenes/global/Sidebar"
import Dashboard from "./dashboard/scenes/dashboard"
/* import Team from "./dashboard/scenes/team" */
import AddGroup from './dashboard/scenes/group/AddGroup'
import Rounds from './dashboard/scenes/rounds/Rounds'
/* import Invoices from "./dashboard/scenes/invoices" */
import Contacts from "./dashboard/scenes/contacts"
/* import Bar from "./dashboard/scenes/bar" */
import Form from "./dashboard/scenes/form"
/* import Line from "./dashboard/scenes/line"
import Pie from "./dashboard/scenes/pie" */
import FAQ from "./dashboard/scenes/faq"
/* import Geography from "./dashboard/scenes/geography" */
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
  /*const [ isSidebar,  setIsSidebar] = useState(true)
  const [ isAuthenticated,  setIsAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get('token')
      setIsAuthenticated(!!token)
    }

    checkAuthentication()
  }, []) */

  /* useEffect(() => {
    setIsSidebar(true) // Afficher la barre latérale à chaque changement d'emplacement
  }, [location]) */

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* {isAuthenticated && isSidebar &&  */}{ <Sidebar />}{/* } */}
          <main className="content">
            {/* {isAuthenticated &&  */}<Topbar />{/* } */}
            <Routes>
              <Route path="/" element={<Accueil />} /> 

                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* <Route path="/team" element={<Team />} /> */}
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
                  {/* <Route path="/invoices" element={<Invoices />} /> */}
                  <Route path="/form" element={<Form />} />
                  {/* <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} /> */}
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  {/* <Route path="/geography" element={<Geography />} /> */}
                </Route>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
  }       
  
export default App