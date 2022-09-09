import Chart from "../chart/Chart";

const ShowChartAndImage = (props) => {
    if (props.languages) {
        return (
            <div className="chartAndImage">
                <img src={`./${props.name}.png`} alt=""></img>
                <div className="cardChart">
                    <Chart
                        key={props.languages}
                        languages={props.languages}
                    />
                </div>
            </div>
        );
    } else {
        return null
    }
}

export default ShowChartAndImage;