import React, { useState } from "react";
import "./boxCounter.css";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="b-counter">
			<h2 className="btnZero">{count}</h2>
			<button className="btnInc" onClick={() => setCount(count + 1)}><i class='fas fa-plus'></i></button>
			<button className="btnDec" onClick={() => setCount(count - 1)}><i class='fas fa-minus'></i></button>
		</div>
	);
}

export default Counter;
