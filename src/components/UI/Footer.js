import React from "react";
import classes from "./styles/Footer.module.css";

const Footer = () => {
	return (
		<footer class={`footer ${classes.footer}`}>
			<div class={`content ${classes["footer-content"]}`}>
				<p className="my-0">Melvin Cayas</p>
				<p className="my-0">cayasmj@gmail.com</p>
			</div>
		</footer>
	);
};

export default Footer;
