import NavbarLink from "./NavbarLink";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={navbarClasses.navbar}>
			<div className={navbarClasses["navbar-content-container"]}>
				<div>
					<a href="/">
						<span className={navbarClasses["navbar-name"]}>Melvin Cayas</span>
					</a>
				</div>
				<ul className={navbarClasses["links-container"]}>
					<NavbarLink href="/" title="Home" />
					<NavbarLink href="/work" title="Work" />
					<NavbarLink
						href="https://drive.google.com/file/d/1LxtZ2go30yB9UXe914lsr2bVfj6-6ZrX/view?usp=sharing"
						title="Resume"
					/>
					<NavbarLink href="/blog" title="Blog" />
					<NavbarLink href="/contact" title="Contact" />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
