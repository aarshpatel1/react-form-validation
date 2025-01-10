import { useState } from "react";
import Records from "./Records.Jsx";

function Form() {
	const [user, setUser] = useState({});
	const [usersList, setUsersList] = useState([]);
	const [hobbies, setHobbies] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleCheckboxChange = (e) => {
		const { name, value } = e.target;
		if (e.target.checked) {
			setHobbies([...hobbies, value]);
			console.log(hobbies);
		} else {
			setHobbies(hobbies.filter((hobby) => hobby !== value));
			console.log(hobbies);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setUsersList([...usersList, user]);
		setUser({});
	};

	return (
		<>
			<section className="vh-100 d-flex justify-content-center align-items-center">
				<div className="container py-5">
					<h1 className="text-center">Registration Form</h1>
					<form
						className="row g-3 w-50 mx-auto mt-5"
						onSubmit={handleFormSubmit}
					>
						<div className="col-md-6">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								name="name"
								onChange={handleChange}
								value={user.name || ""}
								type="text"
								className="form-control"
								id="name"
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="gender">Gender: </label>
							<div className="d-flex align-items-center">
								<div className="form-check py-3">
									<input
										onChange={handleChange}
										className="form-check-input"
										type="radio"
										name="gender"
										id="male"
										value="male"
									/>
									<label className="form-check-label" htmlFor="male">
										Male
									</label>
								</div>
								<div className="form-check ms-4 py-3">
									<input
										onChange={handleChange}
										className="form-check-input"
										type="radio"
										name="gender"
										id="female"
										value="female"
									/>
									<label className="form-check-label" htmlFor="female">
										Female
									</label>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								name="email"
								onChange={handleChange}
								type="email"
								className="form-control"
								id="email"
								value={user.email || ""}
								placeholder="example@xyz.com"
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								name="password"
								onChange={handleChange}
								type="password"
								className="form-control"
								id="password"
								placeholder="At least 8 characters"
								value={user.password || ""}
							/>
						</div>
						<div className="col-12">
							<label htmlFor="inputAddress" className="form-label">
								Address
							</label>
							<textarea
								className="form-control"
								id="inputAddress"
								name="address"
								onChange={handleChange}
								value={user.address || ""}
							></textarea>
						</div>
						<div className="col-md-8">
							<label htmlFor="inputState" className="form-label">
								State
							</label>
							<select
								id="inputState"
								className="form-select"
								name="state"
								defaultChecked="None"
								onChange={handleChange}
							>
								<option value="None">Choose City...</option>
								{[
									"New York",
									"Tokyo",
									"Paris",
									"London",
									"Sydney",
									"Mumbai",
									"Rio de Janeiro",
									"Cape Town",
									"Moscow",
									"Toronto",
								].map((state, index) => (
									<option key={index} value={state}>
										{state}
									</option>
								))}
							</select>
						</div>
						<div className="col-md-4">
							<label htmlFor="zip" className="form-label">
								Zip
							</label>
							<input
								type="text"
								onChange={handleChange}
								className="form-control"
								id="zip"
								name="zip"
								value={user.zip || ""}
							/>
						</div>
						<div className="col-12">
							<h2 className="h6 my-3">Hobbies</h2>
							<div className="row">
								<div className="col-md-3 col-6">
									<div className="form-check">
										<input
											onChange={handleCheckboxChange}
											className="form-check-input"
											type="checkbox"
											id="cricket"
											name="hobbies"
											value="cricket"
										/>
										<label className="form-check-label" htmlFor="cricket">
											Cricket
										</label>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="form-check">
										<input
											onChange={handleCheckboxChange}
											className="form-check-input"
											type="checkbox"
											id="chess"
											name="hobbies"
											value="chess"
										/>
										<label className="form-check-label" htmlFor="chess">
											Chess
										</label>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="form-check">
										<input
											onChange={handleCheckboxChange}
											className="form-check-input"
											type="checkbox"
											id="volleyball"
											name="hobbies"
											value="volleyball"
										/>
										<label className="form-check-label" htmlFor="volleyball">
											Volley Ball
										</label>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="form-check">
										<input
											onChange={handleCheckboxChange}
											className="form-check-input"
											type="checkbox"
											id="coding"
											name="hobbies"
											value="coding"
										/>
										<label className="form-check-label" htmlFor="coding">
											Coding
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<button type="submit" className="btn btn-primary mt-3">
								Register Me
							</button>
						</div>
					</form>
				</div>
			</section>
			<Records usersList={usersList} />
		</>
	);
}

export default Form;
