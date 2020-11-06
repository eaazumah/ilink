import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdLocate, IoMdMap, IoMdWifi } from "react-icons/io";
import { FaBeer } from "react-icons/fa";

interface Props {}

const Statistics: React.SFC<Props> = props => {
	return (
		<Container className="" style={{}}>
			<Row className="justify-content-center align-items-center rowStatistics">
				<Col
					sm
					style={{ padding: 30 }}
					className="justify-content-center d-flex align-items-center flex-column"
				>
					<IoMdLocate color="#cc0000" size={40} />
					<div
						style={{
							paddingTop: 8,
							paddingBottom: 8,
							color: "#0080ff",
							fontSize: 50
						}}
					>
						3
					</div>
					<div>Cities</div>
				</Col>
				<Col
					style={{ padding: 30 }}
					sm
					className="justify-content-center d-flex align-items-center flex-column"
				>
					<IoMdWifi size={40} />
					<div
						style={{
							paddingTop: 8,
							paddingBottom: 8,
							color: "#0080ff",
							fontSize: 50
						}}
					>
						10
					</div>
					<div>Gateway</div>
				</Col>

				<Col
					style={{ padding: 30 }}
					sm
					className="justify-content-center d-flex align-items-center flex-column"
				>
					<IoMdMap color="#006600" size={40} />
					<div
						style={{
							paddingTop: 8,
							paddingBottom: 8,
							color: "#0080ff",
							fontSize: 50
						}}
					>
						20km<sup>2</sup>
					</div>
					<div>Area covered nation wide</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Statistics;
