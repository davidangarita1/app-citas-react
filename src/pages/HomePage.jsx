import React, { Fragment } from 'react';

const Home = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row text-center mt-3">
					<div className="col-md-12">
						<h1>Bienvenido a Citas Reactivas</h1>
						<img src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" className="img-fluid" alt="Citas" />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Home;