import * as React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { IoMdMap } from 'react-icons/io';

interface Props {}

const Footer: React.SFC<Props> = (props) => {
	return (
		<div className="footer-container bg-dark" style={styles.container}>
			<Container>
				<Row>
					<Col md>
						<Row>
							<Navbar variant="dark" bg={'tranparent'} className="flex-column">
								<Nav className="flex-column">
									<Nav.Item>
										<div className={' footer-header'}>ilink</div>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link className="text-whit">
											<IoMdMap size={30} color={'white'} />
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link className="text-whit" />
									</Nav.Item>
									<Nav.Item>
										<Nav.Link className="text-whit">About</Nav.Link>
									</Nav.Item>
								</Nav>
							</Navbar>
						</Row>
					</Col>
					<Col md>
						<Row>
							<Col>
								<Navbar variant="dark" bg={'tranparent'}>
									<Nav className="flex-column">
										<Nav.Item>
											<div className="footer-header">Explore</div>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">Docs</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">Learn</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">About</Nav.Link>
										</Nav.Item>
									</Nav>
								</Navbar>
							</Col>
							<Col>
								<Navbar variant="dark" bg={'tranparent'}>
									<Nav className="flex-column">
										<Nav.Item>
											<div className="footer-header">Explore</div>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">Blog</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">Support</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="text-whit">About</Nav.Link>
										</Nav.Item>
									</Nav>
								</Navbar>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const styles = {
	explore: {},
	exploreHead: {},
	container: {
		// paddingTop: 60,
		// paddingBottom: 60,
		// backgroundColor: "blacks"
	}
};

export default Footer;
