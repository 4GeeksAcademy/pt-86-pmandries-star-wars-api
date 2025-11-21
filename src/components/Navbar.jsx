import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
					<h1>Star Wars API</h1>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Return Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};