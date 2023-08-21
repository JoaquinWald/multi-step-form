import { useContext } from 'react';
import { MontlyPickOnsPlan, YearlyPickOnsPlan } from './pages';
import { PlanContext } from '../../context/PlanContext';

export const PickAddOns = () => {
	const { monthly } = useContext(PlanContext);

	return (
		<section className='flex justify-center w-full max-w-4xl'>
			{monthly ? <MontlyPickOnsPlan /> : <YearlyPickOnsPlan />}

			<></>
		</section>
	);
};
