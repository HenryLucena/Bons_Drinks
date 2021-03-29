import React from 'react';
import "./App.css";
import Footer from "./components/Footer/pe";
import Formulario from "./components/Formulario/Formulario";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SobreNos from "./components/Sobre/Sobre.js";
import Home from "./components/Home/Home";
import Drinks from "./components/Drinks/Drinks";
import MenuHeader from "./components/Header/Header";

const App = () => {
	return (
		<div className="App">
			<Router>
				<MenuHeader />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/contato">
						<Formulario />
					</Route>
					<Route exact path="/sobre">
						<SobreNos />
					</Route>
					<Route exact path="/nossoTime">
						<SobreNos />
					</Route>
					<Route exact path="/drinks">
						<Drinks />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
