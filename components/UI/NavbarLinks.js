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
					<Link href="https://drive.google.com/file/d/1LxtZ2go30yB9UXe914lsr2bVfj6-6ZrX/view?usp=sharing">
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
