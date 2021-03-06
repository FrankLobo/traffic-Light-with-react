import React, { useState } from "react";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("");
	const [colorPurple, setColorPurple] = useState(true);
	function agregar() {
		setColorPurple(!colorPurple);
	}
	return (
		<>
			<div className="base-light"></div>
			<div className="traffic-light">
				<div
					className={"light red" + (color === "red" ? " glow1" : "")}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow" + (color === "yellow" ? " glow2" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green" + (color === "green" ? " glow3" : "")
					}
					onClick={() => setColor("green")}></div>
				{colorPurple && (
					<div
						className={
							"light purple" +
							(color === "purple" ? " glow4" : "")
						}
						onClick={() => setColor("purple")}></div>
				)}
			</div>
			<button onClick={() => agregar()}>Click me</button>;
		</>
	);
};

export default TrafficLight;
