import { useState } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;

	return { width, height };
};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState();

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowDimensions(getWindowDimensions());
		};
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return {
		windowDimensions,
		handleWindowResize,
	};
};

export default useWindowDimensions;
