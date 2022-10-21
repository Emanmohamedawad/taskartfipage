import React from 'react';
import Styleall from './Styleall';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

//Pages
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';



function App() {
	return (
		<Router>
			<Styleall />
			<Navbar /> 
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
