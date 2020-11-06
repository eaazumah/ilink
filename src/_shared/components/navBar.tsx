import * as React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = props => {
	const NavButton = withRouter((props: any) => (
		<Button variant="outline-info" onClick={() => props.history.push(props.to)}>
			{props.children}
		</Button>
	));
	return (
		<div className="nav-container bg-dark">
			<Container>
				<Navbar
					collapseOnSelect
					expand="md"
					bg="transparent"
					variant="dark"
					//className={"d-flex"}
				>
					<Navbar.Brand href="#home">
						<div className={"brand"}>ilink</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="align-items-center"
					>
						<Nav className="ml-auto align-items-center">
							<Nav.Link>Coverage</Nav.Link>
							<Nav.Link>Learn</Nav.Link>
							<Nav.Link>Docs</Nav.Link>
							<Nav.Link>
								<NavButton to={"/login"}>Login</NavButton>
							</Nav.Link>
							<Nav.Link>
								<NavButton to={"/login"}>Sign Up</NavButton>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</div>
	);
};

export default NavBar;
