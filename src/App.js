import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {
	const cards = data.map((card) => <Card key={card.id} {...card} />);

	return (
		<div className="app">
			<Navbar />
			<Hero />
			<section className="card--list">{cards}</section>
		</div>
	);
}
