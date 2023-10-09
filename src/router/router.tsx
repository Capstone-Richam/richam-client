import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainPage from '@/pages/MainPage';

const router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default router;
