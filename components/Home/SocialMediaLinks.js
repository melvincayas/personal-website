import classes from "../../styles/Home/ProfilePic.module.css";

const SocialMediaLinks = () => {
	return (
		<div>
			<a href="mailto:cayasmj@gmail.com?Subject=Hi,%20Melvin!">
				<i
					className={`far fa-envelope p-2 is-size-5 ${classes.btn} ${classes.email}`}
				></i>
			</a>
			<a
				className={classes["github-link"]}
				href="https://github.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-github mx-1 p-2 is-size-5 ${classes.btn} ${classes.github}`}
				></i>
			</a>
			<a
				className={classes["instagram-link"]}
				href="https://www.instagram.com/melvin.cayas/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-instagram p-2 is-size-5 ${classes.btn} ${classes.instagram}`}
				></i>
			</a>
		</div>
	);
};

export default SocialMediaLinks;
