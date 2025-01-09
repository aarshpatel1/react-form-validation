import { useState } from "react";
import Records from "./Records.Jsx";

function Form() {
	const [user, setUser] = useState({});
	const [usersList, setUsersList] = useState([]);
	return (
		<>
			<div className="container py-5">
				<h1 className="text-center">Registration Form</h1>
				<form className="row g-3 w-50 mx-auto mt-5">
					<div className="col-md-6">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input type="text" className="form-control" id="name" />
					</div>
					<div className="col-md-6">
						<label htmlFor="gender">Gender: </label>
						<div className="d-flex align-items-center">
							<div className="form-check py-3">
								<input
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
							type="email"
							className="form-control"
							id="email"
							placeholder="example@xyz.com"
						/>
					</div>
					<div className="col-md-6">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="At least 8 characters"
						/>
					</div>
					<div className="col-12">
						<label htmlFor="inputAddress" className="form-label">
							Address
						</label>
						<textarea className="form-control" id="inputAddress"></textarea>
					</div>
					<div className="col-md-8">
						<label htmlFor="inputState" className="form-label">
							State
						</label>
						<select id="inputState" className="form-select">
							<option value="None" disabled>Choose...</option>
							<option value="1">...</option>
						</select>
					</div>
					<div className="col-md-4">
						<label htmlFor="inputZip" className="form-label">
							Zip
						</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
					<div className="col-12">
						<h2 className="h6 my-3">Hobbies</h2>
						<div className="row">
							<div className="col-md-3 col-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="cricket"
									/>
									<label className="form-check-label" htmlFor="cricket">
										Cricket
									</label>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="chess"
									/>
									<label className="form-check-label" htmlFor="chess">
										Chess
									</label>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="volleyball"
									/>
									<label className="form-check-label" htmlFor="volleyball">
										Volley Ball
									</label>
								</div>
							</div>
							<div className="col-md-3 col-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="coding"
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

			<Records usersList={usersList} />
		</>
	);
}

export default Form;
