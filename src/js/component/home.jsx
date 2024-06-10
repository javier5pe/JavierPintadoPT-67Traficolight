import React,{useState} from "react";



//create your first component
const Home = () => {
	return (
		<div className=" semaforo text-container-center">
			<button type="button" className="light btn btn-success rounded-circle mx-auto my-2 mt-3"></button>
			<button type="button" className="light btn btn-danger rounded-circle mx-auto my-2 mt-3"></button>
			<button type="button" className="light btn btn-warning rounded-circle mx-auto my-2 mt-3"></button>
		</div>
	);
};

export default Home;

// contenido semaforo container d-inline-block p-2 text-bg-dark h-5 w-2
