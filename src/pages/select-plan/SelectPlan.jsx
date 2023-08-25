import { MontlyPlan, YearlyPlan } from './pages';
import { MonthlyYearlySwitch } from '../../components';
import { useSelector } from 'react-redux';

export const SelectPlan = () => {
	const { monthlyState } = useSelector((state) => state.plan);

	return (
		<section className='relative w-full max-h-min h-screen md:h-full'>
			{monthlyState ? <MontlyPlan /> : <YearlyPlan />}

			<MonthlyYearlySwitch />
		</section>
	);
};
