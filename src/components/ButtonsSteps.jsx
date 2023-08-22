import { useLocation } from 'react-router-dom';

export const ButtonsSteps = () => {
	const location = useLocation();
	const activeRoute = location.pathname;
	console.log(activeRoute);

	return (
		<section className='absolute flex w-full top-10 justify-center md:w-min md:z-20 '>
			<nav className='flex md:flex-col md:mt-10 ml-10 md:w-72'>
				<div className='mb-10 md:flex'>
					{activeRoute === '/personal-info' ? (
						<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
							<span className='m-auto'>1</span>
						</div>
					) : (
						<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
							<span className='m-auto'>1</span>
						</div>
					)}
					<div className='ml-5 hidden md:block'>
						<span className='text-gray-300'>STEP 1</span>
						<p className='text-white text-xl font-bold'>YOUR INFO</p>
					</div>
				</div>

				<div className='mb-10 md:flex'>
					{activeRoute === '/select-plan' ? (
						<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
							<span className='m-auto'>2</span>
						</div>
					) : (
						<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
							<span className='m-auto'>2</span>
						</div>
					)}
					<div className='ml-5 hidden md:block'>
						<span className='text-gray-300'>STEP 2</span>
						<p className='text-white text-xl font-bold'>SELECT PLAN</p>
					</div>
				</div>

				<div className='mb-10 md:flex'>
					{activeRoute === '/pick-add-ons' ? (
						<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
							<span className='m-auto'>3</span>
						</div>
					) : (
						<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
							<span className='m-auto'>3</span>
						</div>
					)}
					<div className='ml-5 hidden md:block'>
						<span className='text-gray-300'>STEP 3</span>
						<p className='text-white text-xl font-bold'>ADD-ONS</p>
					</div>
				</div>

				<div className='md:flex'>
					{activeRoute === '/finishing-up' ? (
						<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
							<span className='m-auto'>4</span>
						</div>
					) : (
						<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
							<span className='m-auto'>4</span>
						</div>
					)}
					<div className='ml-5 hidden md:block'>
						<span className='text-gray-300'>STEP 4</span>
						<p className='text-white text-xl font-bold'>SUMMARY</p>
					</div>
				</div>
			</nav>
		</section>
	);
};
