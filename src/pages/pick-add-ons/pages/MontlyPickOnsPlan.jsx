import { useNavigate } from 'react-router-dom';
import { GoBackButton, NextStepButton } from '../../../components';

export const MontlyPickOnsPlan = () => {
	const navigate = useNavigate();

	const handleNextPage = () => {
		navigate('/finishing-up');
	};

	const handleBackPage = () => {
		navigate('/select-plan');
	};

	return (
		<section className='absolute top-28 max-w-4xl h-min'>
			<div className='p-10 mx-6 rounded-2xl bg-white'>
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
							<span className='text-blue-700'>+$1/mo</span>
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
							<span className='text-blue-700'>+$2/mo</span>
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
							<span className='text-blue-700'>+$2/mo</span>
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
