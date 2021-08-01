import { useState, useEffect } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;

	return { width, height };
};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: undefined,
		height: undefined,
	});

	const handleWindowResize = () => {
		setWindowDimensions(getWindowDimensions());
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
