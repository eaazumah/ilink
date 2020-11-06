import * as React from "react";
import { NavBar } from "../../_shared/components";

interface Props {}

const Login: React.SFC<Props> = props => {
	return (
		<div className="d-flex">
			<NavBar />
		</div>
	);
};

export default Login;
