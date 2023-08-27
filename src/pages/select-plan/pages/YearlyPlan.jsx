import arcadeImg from '../../../assets/images/icon-arcade.svg';
import advancedImg from '../../../assets/images/icon-advanced.svg';
import proImg from '../../../assets/images/icon-pro.svg';
import { GoBackButton, NextStepButton } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAdvancedPlanY, setSelectedArcadePlanY, setSelectedProPlanY } from '../../../redux/store/plan/planSlice';

export const YearlyPlan = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { selectedPlanYearly } = useSelector((state) => state.plan);
	const selectedArcadePlan = selectedPlanYearly.selectedArcadePlan;
	const selectedAdvancedPlan = selectedPlanYearly.selectedAdvancedPlan;
	const selectedProPlan = selectedPlanYearly.selectedProPlan;

	const handleArcadePlan = () => {
		dispatch(setSelectedArcadePlanY(!selectedArcadePlan));
	};
	const handleAdvancedPlan = () => {
		dispatch(setSelectedAdvancedPlanY(!selectedAdvancedPlan));
	};
	const handleProPlan = () => {
		dispatch(setSelectedProPlanY(!selectedProPlan));
	};

	const handleNextPage = () => {
		if (!(selectedArcadePlan || selectedAdvancedPlan || selectedProPlan)) return;

		navigate('/pick-add-ons');
	};
	const handleBackPage = () => {
		navigate('/personal-info');
	};

	return (
		<article className='top-32 w-full h-[410px] flex justify-center md:justify-end md:h-min animate__animated animate__fadeIn'>
			<div className='p-10 pb-32 mx-6 w-full max-w-4xl h-[440px] min-h-max rounded-2xl bg-white md:w-2/3 md:pb-14 md:mr-0 md:bg-transparent md:pl-20'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Select your plan</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>You have the option of monthly or yearly billing.</p>
				</article>

				<article className='md:flex'>
					<section
						onClick={handleArcadePlan}
						className={`flex p-4 py-6 my-4 items-center rounded-xl border border-gray-200 cursor-pointer md:mr-4 md:grid md:w-44 md:h-56 md:px-3 md:py-0 ${
							selectedArcadePlan ? 'bg-[#e3e8ff] border-[#3e4a82]' : ''
						} hover:border-blue-800`}
					>
						<figure className='m-0 pr-4'>
							<img
								src={arcadeImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div className='md:self-end md:mb-3'>
							<h3 className='text-2xl font-bold text-blue-900'>Arcade</h3>
							<span className='text-gray-400 text-lg font-medium'>$90/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>

					<section
						onClick={handleAdvancedPlan}
						className={`flex p-4 py-6 my-4 items-center rounded-xl border border-gray-200 cursor-pointer md:mr-4 md:grid md:w-44 md:h-56 md:px-3 md:py-0 ${
							selectedAdvancedPlan ? 'bg-[#e3e8ff] border-[#3e4a82]' : ''
						} hover:border-blue-800`}
					>
						<figure className='m-0 pr-4'>
							<img
								src={advancedImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div className='md:self-end md:mb-3'>
							<h3 className='text-2xl font-bold text-blue-900'>Advanced</h3>
							<span className='text-gray-400 text-lg font-medium'>$120/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>

					<section
						onClick={handleProPlan}
						className={`flex p-4 py-6 my-4 items-center rounded-xl border border-gray-200 cursor-pointer md:mr-4 md:grid md:w-44 md:h-56 md:px-3 md:py-0 ${
							selectedProPlan ? 'bg-[#e3e8ff] border-[#3e4a82]' : ''
						} hover:border-blue-800`}
					>
						<figure className='m-0 pr-4'>
							<img
								src={proImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div className='md:self-end md:mb-3'>
							<h3 className='text-2xl font-bold text-blue-900'>Pro</h3>
							<span className='text-gray-400 text-lg font-medium'>$150/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>
				</article>
			</div>

			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-between items-center bg-gray-50 md:absolute md:w-2/3 md:rounded-2xl md:mx-6 md:bg-transparent md:pr-[30px] md:pl-20'>
				<div onClick={handleBackPage}>
					<GoBackButton />
				</div>
				<div onClick={handleNextPage}>
					<NextStepButton />
				</div>
			</footer>
		</article>
	);
};
