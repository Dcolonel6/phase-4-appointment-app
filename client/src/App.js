import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Registration } from "./components/authForm/Auth";
import Appointments from "./components/pages/appointment";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Registration />} />
          <Route path="/appointments" element={<Appointments />} />
					<Route exact path="/" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
