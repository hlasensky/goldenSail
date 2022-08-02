import Spacer from "../../components/spacer/Spacer";

import "./Home.scss"



const Home = () => {

	return (
		<div className="section homeContainer">
            <div>
                <div className="nameContainer">
                    TOMÁŠ
                    <br />
                    HLÁSENSKÝ
                </div>
                <Spacer />
			    <div className="subTitle">web designer / programmer</div>
            </div>
            <div className="mtTrContainer">
                <div className="miniTitle">PORTFOLIO</div>
                <img className="triContainer" src="./mid-tri.svg" alt="Triangle" />
            </div>
		</div>
	);
};


export default Home;
