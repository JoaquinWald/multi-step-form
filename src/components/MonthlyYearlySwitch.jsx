import { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';

export const MonthlyYearlySwitch = () => {
	const { monthly, setMonthly } = useContext(PlanContext);

	const handlePlan = () => {
		setMonthly(!monthly);
	};

	return (
		<article className='absolute flex justify-center bottom-32 w-10/12 h-14 rounded-md py-1 z-10 bg-blue-100'>
			<div className='flex items-center text-center'>
				<h3 className='mr-16 text-blue-950 font-bold text-xl'>Monthly</h3>

				<label
					htmlFor='flexSwitchChecked'
					className='relative inline-block w-full h-8 py-1'
					onClick={handlePlan}
				>
					<input
						className='mr-2 -mt-0.5 h-[18px] w-14 appearance-none rounded-2xl bg-blue-950 before:pointer-events-none before:absolute before:h-4 before:w-4 before:rounded-full before:bg-transparent before:content-[""] after:absolute after:z-[2] after:mt-[0.4rem] after:ml-1 after:h-4 after:w-4 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[""] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[0.4rem] checked:after:ml-[2.2rem] checked:after:h-4 checked:after:w-4 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[""] hover:cursor-pointer'
						type='checkbox'
						role='switch'
						id='flexSwitchChecked'
					/>
				</label>

				<h3 className='ml-16 text-blue-950 font-bold text-xl'>Yearly</h3>
			</div>
		</article>
	);
};
