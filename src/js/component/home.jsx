import React from "react";
import { useState } from "react";
import TopTraffic from "./topTraffic.jsx";
import TrafficBody from "./trafficLight.jsx";

//create your first component

const Home = () => {

	return (
		<>
		<TopTraffic />
		<TrafficBody />
		</>
	);
};

export default Home;
