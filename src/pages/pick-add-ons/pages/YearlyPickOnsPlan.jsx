import { useNavigate } from 'react-router-dom';
import { GoBackButton, NextStepButton } from '../../../components';

export const YearlyPickOnsPlan = () => {
	const navigate = useNavigate();

	const handleNextPage = () => {
		navigate('/finishing-up');
	};

	const handleBackPage = () => {
		navigate('/select-plan');
	};

	return (
		<section className='top-32 w-full h-[410px] flex justify-center'>
			<div className='p-10 pb-32 mx-6 w-full max-w-4xl h-[360px] min-h-max rounded-2xl bg-white'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Pick add-ons</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>Add-ons help enhance your gaming experience.</p>
				</article>

				<article>
					<section className='flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer'>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-4 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
								/>
							</label>
							<div className=''>
								<h3 className='text-2xl font-bold text-blue-900'>Online service</h3>
								<span className='text-gray-400 text-lg font-medium'>Acces to multiplayer games</span>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-blue-700'>+$10/yr</span>
						</div>
					</section>

					<section className='flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer'>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-4 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
								/>
							</label>
							<div>
								<h3 className='text-2xl font-bold text-blue-900'>Larger storage</h3>
								<span className='text-gray-400 text-lg font-medium'>Extra 1TB of cloud save</span>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-blue-700'>+$20/yr</span>
						</div>
					</section>

					<section className='flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer'>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-4 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
								/>
							</label>
							<div>
								<h3 className='text-2xl font-bold text-blue-900'>Customizable profile</h3>
								<span className='text-gray-400 text-lg font-medium'>Custom theme on your profile</span>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-blue-700'>+$20/yr</span>
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
		</section>
	);
};
