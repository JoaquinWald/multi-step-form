import { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';

export const MonthlyYearlySwitch = () => {
	const { monthly, setMonthly } = useContext(PlanContext);

	const handlePlan = () => {
		setMonthly(!monthly);
	};

	return (
		<article className='-my-20 mx-auto flex justify-center w-max px-6 h-20 rounded-md py-1 bg-blue-400 md:bg-transparent md:absolute md:right-[63px] md:bottom-80'>
			<div className='flex items-center text-center px-4 p-6 mb-5 mt-12 bg-[#F8F9FE] rounded-md md:w-[350px] md:h-max md:justify-center'>
				<h3 className='mr-16 text-blue-950 font-bold text-xl md:mr-0'>Monthly</h3>

				<label
					htmlFor='flexSwitchChecked'
					className='relative inline-block w-full h-8 py-1 md:w-32'
					onClick={handlePlan}
				>
					<input
						className='mr-2 -mt-0.5 h-[18px] w-14 appearance-none rounded-2xl bg-blue-950 before:pointer-events-none before:absolute before:h-4 before:w-4 before:rounded-full before:bg-transparent before:content-[""] after:absolute after:z-[2] after:mt-[0.4rem] after:ml-1 after:h-4 after:w-4 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[""] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[0.4rem] checked:after:ml-[2.2rem] checked:after:h-4 checked:after:w-4 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[""] hover:cursor-pointer'
						type='checkbox'
						role='switch'
						id='flexSwitchChecked'
					/>
				</label>

				<h3 className='ml-16 text-blue-950 font-bold text-xl md:ml-0'>Yearly</h3>
			</div>
		</article>
	);
};
