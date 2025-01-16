import { useEffect, useState } from "react";
import Records from "./Records.Jsx";

function Form() {
	const [user, setUser] = useState({});
	const [editUser, setEditUser] = useState(null);
	const [errors, setErrors] = useState({});
	const [usersList, setUsersList] = useState(
		JSON.parse(localStorage.getItem("usersList")) || []
	);

	useEffect(() => {
		localStorage.setItem("usersList", JSON.stringify(usersList));
	}, [usersList]);

	const handleChange = (e) => {
		const { name, value, classList } = e.target;
		setUser({ ...user, [name]: value });
		if (classList.contains("is-invalid")) {
			classList.remove("is-invalid");
			classList.add("is-valid");
		}
	};

	const handleCheckboxChange = (e) => {
		const { value, checked, classList } = e.target;
		const updatedHobbies = checked
			? [...(user.hobbies || []), value]
			: (user.hobbies || []).filter((hobby) => hobby !== value);
		setUser({ ...user, hobbies: updatedHobbies });

		if (classList.contains("is-invalid")) {
			classList.remove("is-invalid");
			classList.add("is-valid");
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!validation()) return;
		if (editUser === null) {
			setUsersList([...usersList, { ...user, id: Date.now() }]);
		} else {
			const updatedUsersList = usersList.map((oldUser) =>
				oldUser.id === editUser ? { ...user, id: editUser } : oldUser
			);
			setUsersList(updatedUsersList);
			setEditUser(null);
		}
		setUser({});
	};

	const handleDelete = (id) => {
		const updateUsersList = usersList.filter((user) => user.id !== id);
		setUsersList(updateUsersList);
	};

	const handleEdit = (id) => {
		const updateUser = usersList.find((user) => user.id === id);
		setEditUser(id);
		setUser(updateUser);
	};

	const validation = () => {
		let errors = {};
		const pattern =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!user.name) errors.name = "Name is required";
		if (!user.gender) errors.gender = "Gender is required";
		if (!user.email) errors.email = "Email is required";
		if (user.email && !user.email.includes("@")) errors.email = "Invalid email";
		if (!user.password) errors.password = "Password is required";
		if (user.password && !pattern.test(user.password))
			errors.password =
				"Password must contain at least 8 characters, including uppercase, lowercase letters, numbers and special characters";
		if (!user.address) errors.address = "Address is required";
		if (!user.state) errors.state = "State is required";
		if (!user.zip) errors.zip = "Zip is required";
		if (!user.hobbies) errors.hobbies = "Hobbies is required";

		setErrors(errors);
		return Object.keys(errors).length === 0;
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
								className={`form-control ${errors.name ? "is-invalid" : ""}`}
								id="name"
								placeholder={errors.name}
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="gender">Gender: </label>
							<div className="d-flex align-items-center">
								<div className="form-check py-3">
									<input
										onChange={handleChange}
										className={`form-check-input ${
											errors.gender ? "is-invalid" : ""
										}`}
										type="radio"
										name="gender"
										id="male"
										value="male"
										checked={user.gender === "male"}
									/>
									<label className="form-check-label" htmlFor="male">
										Male
									</label>
								</div>
								<div className="form-check ms-4 py-3">
									<input
										onChange={handleChange}
										className={`form-check-input ${
											errors.gender ? "is-invalid" : ""
										}`}
										type="radio"
										name="gender"
										id="female"
										value="female"
										checked={user.gender === "female"}
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
								className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
								className={`form-control ${
									errors.password ? "is-invalid" : ""
								}`}
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
								id="inputAddress"
								name="address"
								className={`form-control ${errors.address ? "is-invalid" : ""}`}
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
								name="state"
								className={`form-select ${errors.state ? "is-invalid" : ""}`}
								value={user.state || "None"}
								onChange={handleChange}
							>
								<option value="None">Choose City...</option>
								{[
									"Gujarat",
									"Maharashtra",
									"Rajasthan",
									"Kerala",
									"Tamil Nadu",
									"Uttar Pradesh",
									"Bihar",
									"Karnataka",
									"West Bengal",
									"Punjab",
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
								id="zip"
								name="zip"
								className={`form-control ${errors.zip ? "is-invalid" : ""}`}
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
											className={`form-check-input ${
												errors.hobbies ? "is-invalid" : ""
											}`}
											type="checkbox"
											id="cricket"
											name="hobbies"
											value="cricket"
											checked={user.hobbies?.includes("cricket") || false}
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
											className={`form-check-input ${
												errors.hobbies ? "is-invalid" : ""
											}`}
											type="checkbox"
											id="chess"
											name="hobbies"
											value="chess"
											checked={user.hobbies?.includes("chess") || false}
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
											className={`form-check-input ${
												errors.hobbies ? "is-invalid" : ""
											}`}
											type="checkbox"
											id="volleyball"
											name="hobbies"
											value="volleyball"
											checked={user.hobbies?.includes("volleyball") || false}
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
											className={`form-check-input ${
												errors.hobbies ? "is-invalid" : ""
											}`}
											type="checkbox"
											id="coding"
											name="hobbies"
											value="coding"
											checked={user.hobbies?.includes("coding") || false}
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
			<Records
				usersList={usersList}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
			/>
		</>
	);
}

export default Form;
