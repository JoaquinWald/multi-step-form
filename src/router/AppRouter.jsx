import { Navigate, Route, Routes } from 'react-router-dom';
import { FinishingUp, PersonalInfo, PickAddOns, SelectPlan } from '../pages';
import { Header } from '../components';
import { ThankYou } from '../pages/thank-you/ThankYou';

export const AppRouter = () => {
	return (
		<div className='w-screen relative md:w-[700px] md:h-[450px] md:m-auto'>
			<Header />

			<main className='absolute flex justify-center w-full h-full top-36 md:bg-white md:justify-end md:rounded-2xl md:p-4'>
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
