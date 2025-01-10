function Records({ usersList }) {
	return (
		<>
			<div className="container">
				<h2 className="text-center my-5">User Records</h2>
				<table className="table table-hover my-5">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Gender</th>
							<th scope="col">Email</th>
							<th scope="col">Password</th>
							<th scope="col">Address</th>
							<th scope="col">State</th>
							<th scope="col">Zip Code</th>
							<th scope="col">Hobbies</th>
						</tr>
					</thead>
					<tbody>
						{usersList.length === 0 ? (
							<tr>
								<td colSpan="9" className="text-center">
									No Records Found
								</td>
							</tr>
						) : (
							usersList.map((user, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.gender}</td>
									<td>{user.email}</td>
									<td>{user.password}</td>
									<td>{user.address}</td>
									<td>{user.state}</td>
									<td>{user.zip}</td>
									<td>
										{Array.isArray(user.hobbies)
											? user.hobbies.map((hobby, index) => (
													<span
														key={index}
														className="badge bg-secondary-subtle me-2"
													>
														{hobby}
													</span>
											  ))
											: "No hobbies"}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Records;
