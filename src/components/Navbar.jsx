import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/500px-Star_wars2.svg.png" width="90" height="60" alt="Star Wars Logo" />
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Return Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};