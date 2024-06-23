import { Link } from "react-router-dom";

const ManiNav = () => {
	return (
		<nav>
			<ul>
				<Link to={"/dashboard"}>대시보드</Link>
				<Link to={"/inventory"}>재고목록</Link>
				<Link to={"/iventory-in"}>입고</Link>
				<Link to={"/inventory-out"}>출고</Link>
				<Link to={"/alarm"}>알림</Link>
				<Link to={"/setting"}>설정</Link>
			</ul>
		</nav>
	);
};

export default ManiNav;
