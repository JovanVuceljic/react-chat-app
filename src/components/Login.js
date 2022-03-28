import React, { useState } from "react";

const Login = ({ handleLoginData }) => {

	const tokens = ["u4wbEFmRn3Et", "S3U3w8D2TgSM", "Ih65fg5moM4D", "SeHbURlODegY", "T15dbJhHcbCv", "vkwFJpkHTLB1"];

	const [selectedRoom, setSelectedRoom] = useState("")
	const [username, setUsername] = useState("")
	const [error, setError] = useState(null)

	const handleLogin = e => {
		e.preventDefault();
		if (username !== "" && tokens.includes(selectedRoom)) {
			handleLoginData(selectedRoom, username)
			setError("");
		}
		else {
			setError("Username or room not selected");
		}
	}

	return (
		<div className="login">
			<form onSubmit={handleLogin}>
				<div className="select-wrap">
					<select className="input" onChange={(e) => setSelectedRoom(e.target.options[e.target.options.selectedIndex].value)}>
						<option>Select room..</option>
						{tokens.map((t, i) => <option value={t} key={i}>{t}</option>)}
					</select>
				</div>
				<div className="input-wrap">
					<input type="name" className="input" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className="btn-wrap">
					<button className="btn btn-login">Login</button>
				</div>
			</form>
			<div className="error-message">{error}</div>
		</div>
	)

}

export default Login