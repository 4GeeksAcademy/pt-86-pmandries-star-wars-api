import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/500px-Star_wars2.svg.png" width="90" height="60" alt="Star Wars Logo" />
				<div className="ml-auto">
					<Link to="/favorites">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
				{/* <div class="dropdown">
  					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favortites
  					</button>
  					<ul class="dropdown-menu">
    					<li><a class="dropdown-item" href="#">Action</a></li>
    					<li><a class="dropdown-item" href="#">Another action</a></li>
    					<li><a class="dropdown-item" href="#">Something else here</a></li>
  					</ul>
				</div> */}
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Return Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};