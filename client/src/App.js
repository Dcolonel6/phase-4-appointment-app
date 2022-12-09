import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./components/authForm/Auth";
import Appointments from "./components/pages/appointment";
import AllAppointments from "./components/pages/AllAppointments";

export const userContext = React.createContext({
	user: null,
	setUser: (auth) => {},
});
function App() {
	const [user, setUser] = React.useState(null);
	return (
		<Router>
			<userContext.Provider value={{ user, setUser }}>
				<Navbar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Registration />} />
					<Route path="/appointments" element={<AllAppointments />} />
					{user && <Route path="/make-appointments" element={<Appointments />} />}
          {user && <Route path="/doctors" element={<Appointments />} />}
					<Route exact path="/" element={<Login />} />
				</Routes>
			</userContext.Provider>
		</Router>
	);
}

export default App;
