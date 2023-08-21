import { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';
import { MonthlyFinishingPlan } from './pages/MonthlyFinishingPlan/MonthlyFinishingPlan';
import { YearlyFinishingPlan } from './pages/YearlyFinishingPlan/YearlyFinishingPlan';

export const FinishingUp = () => {
	const { monthly } = useContext(PlanContext);

	return (
		<section className='flex justify-center w-full max-w-4xl'>
			{monthly ? <MonthlyFinishingPlan /> : <YearlyFinishingPlan />}

			<></>
		</section>
	);
};
