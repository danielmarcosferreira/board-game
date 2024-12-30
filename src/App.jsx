import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import View from "./components/View"
import Sidebar from "./components/Sidebar";
import Rentals from "./pages/Rentals";
import NewRentalButton from "./components/NewRentalButton";
import Customers from "./pages/Customers";
import Games from "./pages/Games";
import NewRental from "./pages/NewRental";
import NewCustomer from "./pages/NewCustomer";
import Customer from "./pages/Customer";
import NewGame from "./pages/NewGame";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

function App() {
  return (
    <Router>
      <View>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/rentals" />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/games" element={<Games />} />
          <Route path="/rentals/new" element={<NewRental />} />
          <Route path="/customers/new" element={<NewCustomer />} />
          <Route path="/customers/:customerId" element={<Customer />} />
          <Route path="/games/new" element={<NewGame />} />
        </Routes>
        <NewRentalButton />
      </View>
    </Router>
  )
}

export default App
