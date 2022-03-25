import './App.css';
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import moment from 'moment';
import { createNull } from 'typescript';

var FirstPick: any;
var SecondPick: any;

function App() {
	return (
		<div style={{
			display: 'block', width: 700, padding: 30
		}}>
			<h4>ReactJS Ant-Design Calendar Component</h4>
			<Calendar onChange={(value) =>
			{
				if (FirstPick == null)
				{
					FirstPick = value;
				}
				else
				{
					SecondPick = value;
					alert(`Range is ${secondsToDhms(Math.abs(FirstPick.unix() - SecondPick.unix()))}`)
					console.log(`Range is ${secondsToDhms(Math.abs(FirstPick.unix() - SecondPick.unix()))}`);

					FirstPick = null;
					SecondPick = null;
				}

			}} />
		</div>
	);
}

function secondsToDhms(seconds: number) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);

	var dDisplay = d > 0 ? d + (d === 1 ? " day" : " days") : "";
	var hDisplay = h > 0 ? ", " + h + (h === 1 ? " hour" : " hours") : "";
	var mDisplay = m > 0 ? ", " + m + (m === 1 ? " minute" : " minutes") : "";
	var sDisplay = s > 0 ? ", " + s + (s === 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

export default App;
