import React from "react";
import Card from "./entry";
import contents from "./contents";
function App() {
	return (
		<div>
			<h1>
				<span>Download Ringtones FOR FREE</span>
			</h1>
			<div className="aila_jadu">
				<Card
					name={contents[0].name}
					imgURL={contents[0].imgURL}
					soundURL={contents[0].soundURL}
					downloadURL={contents[0].downloadURL}
				/>
				<Card
					name={contents[1].name}
					imgURL={contents[1].imgURL}
					soundURL={contents[1].soundURL}
					downloadURL={contents[1].downloadURL}
				/>
				<Card
					name={contents[2].name}
					imgURL={contents[2].imgURL}
					soundURL={contents[2].soundURL}
					downloadURL={contents[2].downloadURL}
				/>
				<Card
					name={contents[3].name}
					imgURL={contents[3].imgURL}
					soundURL={contents[3].soundURL}
					downloadURL={contents[3].downloadURL}
				/>
			</div>
		</div>
	);
}
export default App;
