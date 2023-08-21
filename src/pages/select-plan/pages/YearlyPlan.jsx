import arcadeImg from '../../../assets/images/icon-arcade.svg';
import advancedImg from '../../../assets/images/icon-advanced.svg';
import proImg from '../../../assets/images/icon-pro.svg';
import { GoBackButton, NextStepButton } from '../../../components';
import { useNavigate } from 'react-router-dom';

export const YearlyPlan = () => {
	const navigate = useNavigate();

	const handleNextPage = () => {
		navigate('/pick-add-ons');
	};

	const handleBackPage = () => {
		navigate('/personal-info');
	};
	return (
		<article className='absolute top-28 max-w-4xl h-min'>
			<div className='p-10 mx-6 rounded-2xl bg-white'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Select your plan</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>You have the option of monthly or yearly billing.</p>
				</article>

				<article>
					<section className='flex p-4 my-4 items-center rounded-xl border border-gray-200 cursor-pointer'>
						<figure className='m-0 pr-4'>
							<img
								src={arcadeImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div className=''>
							<h3 className='text-2xl font-bold text-blue-900'>Arcade</h3>
							<span className='text-gray-400 text-lg font-medium'>$90/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>

					<section className='flex p-4 my-4 items-center rounded-xl border border-gray-200 cursor-pointer'>
						<figure className='m-0 pr-4'>
							<img
								src={advancedImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div>
							<h3 className='text-2xl font-bold text-blue-900'>Advanced</h3>
							<span className='text-gray-400 text-lg font-medium'>$120/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>

					<section className='flex p-4 my-4 items-center rounded-xl border border-gray-200 cursor-pointer'>
						<figure className='m-0 pr-4'>
							<img
								src={proImg}
								alt=''
								className='w-14 m-1'
							/>
						</figure>
						<div>
							<h3 className='text-2xl font-bold text-blue-900'>Pro</h3>
							<span className='text-gray-400 text-lg font-medium'>$150/yr</span>
							<p className='text-blue-900 text-base font-medium'>2 months free</p>
						</div>
					</section>
				</article>
			</div>
			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-between items-center bg-gray-50'>
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
