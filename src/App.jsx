import './App.css'
import AdminRoutes from './Routes/AdminRoutes'
import EnduserRoutes from './Routes/EnduserRoutes'
import VenderRoutes from './Routes/VenderRoutes'

function App() {
  
  return (
    <>
      <EnduserRoutes/>
      <AdminRoutes/>
      <VenderRoutes/>
    </>
  )
}

export default App
