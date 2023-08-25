import { NavLink, useNavigate } from 'react-router-dom';
import { GoBackButton } from '../../../../components';
import { ConfirmButton } from '../../../../components/ConfirmButton';

export const MonthlyFinishingPlan = () => {
	const navigate = useNavigate();

	const handleConfirm = () => {
		navigate('/thank-you');
	};

	const handleBackPage = () => {
		navigate('/pick-add-ons');
	};

	return (
		<section className='top-32 w-full h-[410px] flex justify-center md:justify-end md:h-min'>
			<div className='p-10 pb-32 mx-6 w-full max-w-4xl h-[440px] min-h-max rounded-2xl bg-white md:w-2/3 md:pb-14 md:mr-0 md:bg-transparent md:px-20 md:pl-20'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Finishing up</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>Double-check everything looks OK before confirming.</p>
				</article>

				<article className='bg-[#F8F9FE] rounded-xl'>
					{/* Plan selected section */}
					<section className='flex p-4 mt-4 justify-between items-center rounded-xl'>
						<div className='flex items-center'>
							<div className=''>
								<h3 className='text-2xl font-bold text-blue-900'>Arcade (Monthly)</h3>
								<NavLink
									to='/select-plan'
									className='text-gray-400 underline text-xl font-medium hover:text-blue-600'
								>
									Change
								</NavLink>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-blue-900 font-bold text-xl'>$9/mo</span>
						</div>
					</section>

					<div className='flex justify-center'>
						<hr className='border-gray-300 -border w-11/12' />
					</div>

					{/* Add-ons selected section */}
					<section className='flex p-4 justify-between items-center'>
						<div className='flex items-center'>
							<div>
								<h3 className='text-xl font-medium text-gray-400'>Online service</h3>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-xl font-medium text-blue-900'>+$1/mo</span>
						</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>
								<h3 className='text-xl font-medium text-gray-400'>Larger storage</h3>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-xl font-medium text-blue-900'>+$2/mo</span>
						</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>
								<h3 className='text-xl font-medium text-gray-400'>Customizable profile</h3>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-xl font-medium text-blue-900'>+$2/mo</span>
						</div>
					</section>
				</article>

				<article className='mt-8'>
					<div className='flex justify-between px-2'>
						<h3 className='text-gray-400 text-xl font-medium'>Total (per month)</h3>
						<span className='text-2xl font-bold text-blue-700'>$12/mo</span>
					</div>
				</article>
			</div>
			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-between items-center bg-gray-50 md:absolute md:w-2/3 md:rounded-2xl md:mx-6 md:bg-transparent md:pr-[30px] md:pl-20'>
				<div onClick={handleBackPage}>
					<GoBackButton />
				</div>
				<div onClick={handleConfirm}>
					<ConfirmButton />
				</div>
			</footer>
		</section>
	);
};
