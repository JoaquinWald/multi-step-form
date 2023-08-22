import { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';
import { MontlyPlan } from './pages/MontlyPlan';
import { YearlyPlan } from './pages/YearlyPlan';
import { MonthlyYearlySwitch } from '../../components';

export const SelectPlan = () => {
	const { monthly } = useContext(PlanContext);

	return (
		<section className='relative w-full max-h-min h-screen md:h-full'>
			{monthly ? <MontlyPlan /> : <YearlyPlan />}

			<MonthlyYearlySwitch />
		</section>
	);
};
