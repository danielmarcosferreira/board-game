import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import View from "./components/View"
import Sidebar from "./components/Sidebar";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <Router>
      <View>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Rentals />} />
        </Routes>
        {/* <NewRentalButton /> */}
      </View>
    </Router>
  )
}

export default App
