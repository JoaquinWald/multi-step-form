import { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';
import { MontlyPlan } from './pages/MontlyPlan';
import { YearlyPlan } from './pages/YearlyPlan';
import { MonthlyYearlySwitch } from '../../components';

export const SelectPlan = () => {
	const { monthly } = useContext(PlanContext);

	return (
		<section className='flex justify-center w-full max-w-4xl'>
			{monthly ? <MontlyPlan /> : <YearlyPlan />}

			<MonthlyYearlySwitch />
		</section>
	);
};
