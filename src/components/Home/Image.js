import picture from "../../assets/IMG_2842.jpg";
import classes from "./styles/ProfilePic.module.css";

const Image = () => {
	return (
		<img
			className={`${classes.image}`}
			src={picture}
			alt="Melvin smiling"
		></img>
	);
};

export default Image;
