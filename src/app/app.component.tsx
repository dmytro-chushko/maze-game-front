import React from "react";

import { MainRouter } from "navigation";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<MainRouter />
			<ToastContainer />
		</>
	);
}

export default App;
