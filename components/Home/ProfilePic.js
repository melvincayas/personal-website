import Portrait from "./Portrait";
import ProfileLinks from "./ProfileLinks";
import classes from "./styles/ProfilePic.module.css";

const ProfilePic = () => {
	return (
		<div
			className={`column is-full has-text-centered px-5 mb-3 ${classes["is-vertically-centered"]}`}
		>
			<div>
				<Portrait />
				<ProfileLinks />
			</div>
		</div>
	);
};

export default ProfilePic;
