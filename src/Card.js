import React from 'react';

const Card = () => {
	return(
		<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src="https://robohash.org/test?200x200" alt="bar bo bot" />
			<div className="tc">
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
}

export default Card;