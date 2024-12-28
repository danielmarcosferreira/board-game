import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import View from "./components/View"
import Sidebar from "./components/Sidebar";
import Rentals from "./pages/Rentals";
import NewRentalButton from "./components/NewRentalButton";
import Customers from "./pages/Customers";
import Games from "./pages/Games";

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
        </Routes>
        <NewRentalButton />
      </View>
    </Router>
  )
}

export default App
