import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../styles/UI/Navbar.module.css";

const NavbarLinks = () => {
	const { pathname } = useRouter();

	const isHome = pathname === "/" ? classes.active : "";
	const isWork = pathname === "/work" ? classes.active : "";
	const isBlog = pathname === "/blog" ? classes.active : "";

	return (
		<div className="navbar-menu" id="nav-links">
			<div className="navbar-end">
				<div className="navbar-item">
					<Link href="/">
						<a className={`is-size-5 ${classes["nav-links"]} ${isHome}`}>
							Home
						</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link href="/work">
						<a className={`is-size-5 ${classes["nav-links"]} ${isWork}`}>
							Work
						</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link href="https://doc-08-9k-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/qj303hqev9ug20cfs0k2suf0cocemhgh/7d1on3m84mkc9c5ihvelgno9o00308rd/1627490550000/3/*/APznzaYJgWGif8O5vyj5eJ1Gy2jlUuE3pYT29sdTbRRZQWIYdEVo513XW8QoJ1TVdBiM7p85eWN-w9a9Zo7Q-6I1Z5coihIo2y-GKh5RQNPCITsEP0MCXFTZui2HZKxphLPvnbetSWpiK4KEon9pXzDJj_1I0A9Pl8cOh2rJwLR2weqvOTSTRkU2Yuptx6KrlzhHVjRGiZ9zRCSQxiXlgXmHVdb4rAvdYSfrg0E5vqwN0zu3DmidzXa-OjWmiFQFxfviVxVm3P5LC2QqZvUoNFWXJ67-wRsW2Y4Xs6Si798RNkh4gbspDLKX56u1LAJZW26EVCTQJX0mEWvsq7vD7yX6ypA9LF7YdymMVDekBZFH-DTF24RkEjU=">
						<a
							target="_blank"
							rel="noreferrer noopener"
							className={`is-size-5 ${classes["nav-links"]}`}
						>
							Resume
						</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link href="/blog">
						<a className={`is-size-5 ${classes["nav-links"]} ${isBlog}`}>
							Blog
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarLinks;
