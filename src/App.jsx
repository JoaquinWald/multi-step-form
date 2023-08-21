import { PlanProvider } from './context/PlanProvider';
import { AppRouter } from './router/AppRouter';

function App() {
	return (
		<PlanProvider>
			<AppRouter />
		</PlanProvider>
	);
}

export default App;
