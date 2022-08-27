import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import "./Chart.scss";

const Chart = ({ languages }) => {
	const [languageState, setLanguageState] = useState([]);

	useEffect(() => {
		let newArr = [];
		Object.entries(languages).map(([key, value]) => {
			const newObj = {};
			newObj.name = key;
			newObj.value = value;
			return (newArr = [...newArr, newObj]);
		});
		setLanguageState([...newArr]);
	}, [languages]);

	const renderLabel = (entry) => {
		return entry.name;
	};

	const data = languageState;
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
	return (
		<PieChart width={300} height={200}>
			<Pie
				data={data}
				innerRadius={40}
				outerRadius={60}
				paddingAngle={0}
				dataKey="value"
				nameKey="name"
				label={renderLabel}
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={COLORS[index % COLORS.length]}
					/>
				))}
			</Pie>
		</PieChart>
	);
};

export default Chart;
