import { Navigate, Route, Routes } from 'react-router-dom';
import { FinishingUp, PersonalInfo, PickAddOns, SelectPlan } from '../pages';
import { Header } from '../components';
import { ThankYou } from '../pages/thank-you/ThankYou';

export const AppRouter = () => {
	return (
		<div className='grid w-full'>
			<Header />

			<main className=''>
				<Routes>
					<Route
						path='personal-info'
						element={<PersonalInfo />}
					/>
					<Route
						path='select-plan'
						element={<SelectPlan />}
					/>
					<Route
						path='pick-add-ons'
						element={<PickAddOns />}
					/>
					<Route
						path='finishing-up'
						element={<FinishingUp />}
					/>
					<Route
						path='thank-you'
						element={<ThankYou />}
					/>
					<Route
						path='/*'
						element={<Navigate to={'/personal-info'} />}
					/>
				</Routes>
			</main>
		</div>
	);
};
