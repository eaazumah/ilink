import * as React from "react";
import Particles from "react-particles-js";
import { NavBar } from "../../_shared/components";
import "./page.css";
import Coverage from "./components/coverage";
import Statistics from "./components/statistics";
import Footer from "./components/footer";
interface Props {}

const Home: React.SFC<Props> = props => {
	return (
		<div>
			<div>
				<Particles
					className="particles"
					params={{
						particles: {
							number: {
								value: 150
								// density: {
								// 	enable: true,
								// 	value_area: 800
								// }
							}
							// line_linked: {
							// 	shadow: {
							// 		enable: true,
							// 		color: "#3CA9D1",
							// 		blur: 5
							// 	}
							// }
						}
					}}
					style={{
						width: "100%",
						backgroundColor: "#0080ff",
						height: "100%"
					}}
				/>
				<NavBar />
			</div>
			<Statistics />
			<Coverage />
			<Statistics />
			<Footer />
		</div>
	);
};

export default Home;
