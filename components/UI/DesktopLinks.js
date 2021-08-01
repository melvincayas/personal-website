import { Fragment } from "react";
import NavbarLink from "./NavbarLink";

const DesktopLinks = () => {
	return (
		<Fragment>
			<NavbarLink href="/" title="Home" />
			<NavbarLink href="/work" title="Work" />
			<NavbarLink
				href="https://drive.google.com/file/d/1LxtZ2go30yB9UXe914lsr2bVfj6-6ZrX/view?usp=sharing"
				title="Resume"
			/>
			<NavbarLink href="/blog" title="Blog" />
			<NavbarLink href="/contact" title="Contact" />
		</Fragment>
	);
};

export default DesktopLinks;
