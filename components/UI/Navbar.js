import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const Navbar = () => {
	const { pathname } = useRouter();

	const isHome = pathname === "/" ? navbarClasses.active : "";
	const isWork = pathname === "/work" ? navbarClasses.active : "";
	const isBlog = pathname === "/blog" ? navbarClasses.active : "";
	const isContact = pathname === "/contact" ? navbarClasses.active : "";

	return (
		<nav className={navbarClasses.navbar}>
			<div className={navbarClasses["navbar-content-container"]}>
				<div>
					<a href="/">
						<span className={navbarClasses["navbar-name"]}>Melvin Cayas</span>
					</a>
				</div>
				<ul className={navbarClasses["links-container"]}>
					<li className={navbarClasses.link}>
						<Link href="/">
							<a className={`${isHome}`}>Home</a>
						</Link>
					</li>
					<li className={navbarClasses.link}>
						<Link href="/work">
							<a className={`${isWork}`}>Work</a>
						</Link>
					</li>
					<li className={navbarClasses.link}>
						<Link href="https://drive.google.com/file/d/1LxtZ2go30yB9UXe914lsr2bVfj6-6ZrX/view?usp=sharing">
							<a target="_blank" rel="noreferrer noopener">
								Resume
							</a>
						</Link>
					</li>
					<li className={navbarClasses.link}>
						<Link href="/blog">
							<a className={`${isBlog}`}>Blog</a>
						</Link>
					</li>
					<li className={navbarClasses.link}>
						<Link href="/contact">
							<a className={`${isContact}`}>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
