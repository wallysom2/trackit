import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Login from "./Login";
import Cadastro from "./Cadastro";


const App = () => {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
			</Routes>
		</BrowserRouter>
    );
    }
export default App;
