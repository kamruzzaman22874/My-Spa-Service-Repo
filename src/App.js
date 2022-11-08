
import './App.css';
import Routes from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';



function App() {
  return (
		<div className='App'>
			<Toaster/>
			<Routes></Routes>
		</div>
	);
}

export default App;
