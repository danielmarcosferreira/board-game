import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import View from "./components/View"
import Sidebar from "./components/Sidebar";
import Rentals from "./pages/Rentals";
import NewRentalButton from "./components/NewRentalButton";
import Customers from "./pages/Customers";
import Games from "./pages/Games";
import NewRental from "./pages/NewRental";

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
        </Routes>
        <NewRentalButton />
      </View>
    </Router>
  )
}

export default App
