import ReactLoading from "react-loading";
import loadingScreenClasses from "../../styles/UI/LoadingScreen.module.css";

const LoadingScreen = () => {
	return (
		<div className={loadingScreenClasses.container}>
			<ReactLoading type="spin" color="#2b95f0" />
		</div>
	);
};

export default LoadingScreen;
