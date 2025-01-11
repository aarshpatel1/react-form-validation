import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

function Records({ usersList }) {
	return (
		<>
			<div className="container">
				<h2 className="text-center my-5">User Records</h2>
				<DataTable key={usersList} className="table table-hover my-5">
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
						{usersList.map((user, index) => (
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
						))}
					</tbody>
				</DataTable>
			</div>
		</>
	);
}

export default Records;
