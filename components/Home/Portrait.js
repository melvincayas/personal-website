import Image from "next/image";
import picture from "../../public/assets/IMG_2842.jpg";
import classes from "./styles/ProfilePic.module.css";

const Portrait = () => {
	return (
		<Image
			className={`${classes.image}`}
			src={picture}
			alt="Melvin Cayas smiling"
		/>
	);
};

export default Portrait;
