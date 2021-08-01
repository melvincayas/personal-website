import NavbarLink from "./NavbarLink";
import navbarClasses from "../../styles/Navbar/Navbar.module.css";

const LinkContainer = props => {
	return (
		<ul className={navbarClasses["links-container"]}>
			<NavbarLink onClose={props.onClose} href="/" title="Home" />
			<NavbarLink onClose={props.onClose} href="/work" title="Work" />
			<NavbarLink
				onClose={props.onClose}
				href="https://drive.google.com/file/d/1LxtZ2go30yB9UXe914lsr2bVfj6-6ZrX/view?usp=sharing"
				title="Resume"
			/>
			<NavbarLink onClose={props.onClose} href="/blog" title="Blog" />
			<NavbarLink onClose={props.onClose} href="/contact" title="Contact" />
		</ul>
	);
};

export default LinkContainer;
