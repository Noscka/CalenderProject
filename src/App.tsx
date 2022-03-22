import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import moment from 'moment';

var FirstPick = moment();
var SecondPick = moment();

function App() {
	return (
		<div style={{
			display: 'block', width: 700, padding: 30
		}}>
			<h4>ReactJS Ant-Design Calendar Component</h4>
			<Calendar onChange={(value) =>
			{
				
				if (FirstPick != null)
				{
					FirstPick = value
					console.log(FirstPick)
					alert(FirstPick)
				}
				else
				{
					//FirstPick = value;
					SecondPick = value
					//alert(`Range is ${FirstPick.valueOf() - SecondPick.valueOf()}`)
					alert(FirstPick)
					alert(SecondPick)
					console.log(FirstPick)
					console.log(SecondPick)
				}

			}} />
		</div>
	);
}

export default App;
