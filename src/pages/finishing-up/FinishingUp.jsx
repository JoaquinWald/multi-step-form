import { MonthlyFinishingPlan } from './pages/MonthlyFinishingPlan/MonthlyFinishingPlan';
import { YearlyFinishingPlan } from './pages/YearlyFinishingPlan/YearlyFinishingPlan';
import { useSelector } from 'react-redux';

export const FinishingUp = () => {
	const { monthlyState } = useSelector((state) => state.plan);

	return (
		<section className='relative w-full max-h-min h-screen md:h-full'>
			{monthlyState ? <MonthlyFinishingPlan /> : <YearlyFinishingPlan />}

			<></>
		</section>
	);
};
