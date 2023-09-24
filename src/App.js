/** @format */

import './App.css';
import UseCallback from './hooks-contoh/UseCallback';
import UseContext from './hooks-contoh/UseContext';
import UseEffect from './hooks-contoh/UseEffect';
import UseImperativeHandle from './hooks-contoh/UseImperativeHandle';
import UseLayoutEffect from './hooks-contoh/UseLayoutEffect';
import UseMemo from './hooks-contoh/UseMemo';
import UseReducer from './hooks-contoh/UseReducer';
import UseRef from './hooks-contoh/UseRef';
import UseRef2 from './hooks-contoh/UseRef2';
import UseState from './hooks-contoh/UseState';
import UseId from './hooks-contoh/UseId';
import CustomHook from './hooks-contoh/CustomHook';
import UseDebugValue from './hooks-contoh/UseDebugValue';

function App() {
	return (
		<div>
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <UseEffect /> */}
			{/* <UseLayoutEffect /> */}
			{/* <UseContext /> */}
			{/* <UseRef /> */}
			{/* <UseRef2 /> */}
			{/* <UseImperativeHandle /> */}
			{/* <UseMemo /> */}
			{/* <UseCallback /> */}
			{/* <UseId/> */}
			<CustomHook />
			{/* <UseDebugValue /> */}
		</div>
	);
}

export default App;
