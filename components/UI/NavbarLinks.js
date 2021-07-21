import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../styles/UI/Navbar.module.css";

const NavbarLinks = () => {
	const { pathname } = useRouter();

	const isHome = pathname === "/" ? classes.active : "";
	const isProjects = pathname === "/projects" ? classes.active : "";
	const isResume = pathname === "/resume" ? classes.active : "";
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
					<Link href="/projects">
						<a className={`is-size-5 ${classes["nav-links"]} ${isProjects}`}>
							Projects
						</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link href="/resume">
						<a className={`is-size-5 ${classes["nav-links"]} ${isResume}`}>
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
