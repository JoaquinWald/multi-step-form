import { MontlyPickOnsPlan, YearlyPickOnsPlan } from './pages';
import { useSelector } from 'react-redux';

export const PickAddOns = () => {
	const { monthlyState } = useSelector((state) => state.plan);

	return (
		<section className='relative w-full max-h-min h-screen md:h-full'>
			{monthlyState ? <MontlyPickOnsPlan /> : <YearlyPickOnsPlan />}

			<></>
		</section>
	);
};
