import Link from "next/link";
import { useRouter } from "next/router";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const NavbarLink = props => {
	const { pathname } = useRouter();

	const isActive = pathname === props.href ? navbarClasses.active : "";

	return (
		<li className={navbarClasses.link}>
			<Link href={props.href}>
				<a
					onClick={props.onClose}
					target={props.title === "Resume" ? "_blank" : ""}
					rel={props.title === "Resume" ? "noreferrer noopener" : ""}
					className={`${isActive}`}
				>
					{props.title}
				</a>
			</Link>
		</li>
	);
};

export default NavbarLink;
