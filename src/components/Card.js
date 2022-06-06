import React from "react";

export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img src={`/images/${props.coverImg}`} alt="card" />
			<div className="card--stats">
				<img className="star" src="images/star.png" alt="star" />
				<span>{props.stats.rating} </span>
				<span className="card--light--text">
					({props.stats.reviewCount}) • {props.location}
				</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="card--heavy--text">From ${props.price}</span> /
				person
			</p>
		</div>
	);
}
