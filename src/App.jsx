import { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./pages/home'));

export function App() {
	return (
		<Suspense fallback={<p>Carregando...</p>}>
			<Home />
		</Suspense>
	)
}
