import { Fragment } from "react";
import picture from "../../../assets/IMG_2842.jpg";
import classes from "./ProfilePic.module.css";

const ProfilePic = () => {
	return (
		<Fragment>
			<div
				className={`column is-two-fifths has-text-centered px-5 ${classes["is-vertically-centered"]}`}
			>
				<img
					className={`${classes.image}`}
					src={picture}
					alt="Melvin smiling"
				></img>
			</div>
		</Fragment>
	);
};

export default ProfilePic;
