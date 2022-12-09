import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	const { user, setUser } = React.useContext(userContext);
	const navigate = useNavigate();
	const logout = (e) => {
		e.preventDefault();
    setUser(null);
    navigate("/login");
		// axios({
		// 	method: "delete",
		// 	url: "http://localhost:3000/auth/logout",
    //   data: {
    //     user_id: user.id
    //   }
		// }).then((res) => {
    //   setUser(null);
    //   navigate("/login");
    // }).catch (err => {
    //   setUser(null);
    //   navigate("/login");
    // });
	};
	return (
		<>
			<Nav>
				<NavLink to="/">BookADoc</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/appointments" >
						Appointment
					</NavLink>
					{user&&user.role ==='Doctor'&&<NavLink to="/doctors" >
						Doctors
					</NavLink>}
				</NavMenu>
				<NavBtn>
					{!user && <NavBtnLink to="/login">Log In</NavBtnLink>}
					{user && (
						<NavBtnLink to="#" onClick={(e) => logout(e)}>
							Log Out
						</NavBtnLink>
					)}
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
