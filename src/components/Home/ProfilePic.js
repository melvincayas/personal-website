import picture from "../../assets/IMG_2842.jpg";
import classes from "./styles/ProfilePic.module.css";

const ProfilePic = () => {
	return (
		<div
			className={`column is-two-fifths has-text-centered px-5 ${classes["is-vertically-centered"]}`}
		>
			<div>
				<img
					className={`${classes.image}`}
					src={picture}
					alt="Melvin smiling"
				></img>
				<div>
					<i
						className={`far fa-envelope p-2 is-size-5 ${classes.btn} ${classes.email}`}
					></i>
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
			</div>
		</div>
	);
};

export default ProfilePic;
