import footerClasses from "../../styles/UI/Footer.module.css";

const Footer = () => {
	return (
		<footer class={footerClasses.footer}>
			<div className={footerClasses["footer-text-container"]}>
				<p className={footerClasses["footer-text"]}>cayasmj@gmail.com</p>
			</div>
		</footer>
	);
};

export default Footer;
