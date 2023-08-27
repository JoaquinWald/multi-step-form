import { useDispatch, useSelector } from 'react-redux';
import { switchMonthlyState } from '../redux/store/plan/planSlice';

export const MonthlyYearlySwitch = () => {
	const dispatch = useDispatch();
	const { monthlyState } = useSelector((state) => state.plan);

	const handlePlan = () => {
		dispatch(switchMonthlyState(!monthlyState));
	};

	return (
		<article className='-my-20 mx-auto flex justify-center w-max px-6 h-20 rounded-md py-1 md:bg-transparent md:absolute md:right-[39px] md:bottom-80 animate__animated animate__fadeIn'>
			<div className='flex items-center text-center px-4 p-6 mb-5 mt-12 bg-[#F8F9FE] rounded-md md:w-[350px] md:h-max md:justify-center'>
				<h3 className={`${monthlyState ? 'text-blue-950' : 'text-gray-400'} mr-16 font-bold text-xl md:mr-0`}>Monthly</h3>

				<label
					htmlFor='flexSwitchChecked'
					className='relative inline-block w-full h-8 py-1 md:w-32'
				>
					<input
						onClick={handlePlan}
						className={`${
							monthlyState
								? 'mr-2 -mt-0.5 h-[18px] w-14 appearance-none rounded-2xl bg-blue-950 before:pointer-events-none before:absolute before:h-4 before:w-4 before:rounded-full before:bg-transparent before:content-[""] after:absolute after:z-[2] after:mt-[0.4rem] after:ml-[.3rem] after:h-4 after:w-4 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[""] hover:cursor-pointer'
								: 'mr-2 -mt-0.5 h-[18px] w-14 appearance-none rounded-2xl bg-blue-950 before:pointer-events-none before:absolute before:h-4 before:w-4 before:rounded-full before:bg-transparent before:content-[""] after:absolute after:z-[2] after:mt-[0.4rem] after:ml-[2.2rem] after:h-4 after:w-4 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[""] hover:cursor-pointer checked:after:absolute checked:after:z-[2] checked:after:mt-[0.4rem] checked:after:ml-[2.2rem] checked:after:h-4 checked:after:w-4 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[""]'
						}`}
						type='checkbox'
						role='switch'
						id='flexSwitchChecked'
					/>
				</label>

				<h3 className={`${monthlyState ? 'text-gray-400' : 'text-blue-950'} ml-16 font-bold text-xl md:ml-0`}>Yearly</h3>
			</div>
		</article>
	);
};
