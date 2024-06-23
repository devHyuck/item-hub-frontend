import { Outlet } from "react-router-dom";
import ManiNav from "./components/layout/ManiNav";

const App = () => {
	return (
		<div>
			<ManiNav />
			<Outlet />
		</div>
	);
};

export default App;
