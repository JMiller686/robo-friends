import React from 'react';

const Card = ({ name, email, id }) => {
	return(
		<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt="bar bo bot" />
			<div className="tc">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;