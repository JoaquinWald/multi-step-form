import { useLocation } from 'react-router-dom';

export const ButtonsSteps = () => {
	const location = useLocation();
	const activeRoute = location.pathname;
	console.log(activeRoute);

	return (
		<section className='absolute flex w-full top-10 justify-center'>
			<nav className='flex'>
				{activeRoute === '/personal-info' ? (
					<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
						<span className='m-auto'>1</span>
					</div>
				) : (
					<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
						<span className='m-auto'>1</span>
					</div>
				)}

				{activeRoute === '/select-plan' ? (
					<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
						<span className='m-auto'>2</span>
					</div>
				) : (
					<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
						<span className='m-auto'>2</span>
					</div>
				)}

				{activeRoute === '/pick-add-ons' ? (
					<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
						<span className='m-auto'>3</span>
					</div>
				) : (
					<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
						<span className='m-auto'>3</span>
					</div>
				)}

				{activeRoute === '/finishing-up' ? (
					<div className='flex text-2xl mx-3 font-bold rounded-full w-12 h-12 border border-slate-50 text-black bg-blue-200 border-none'>
						<span className='m-auto'>4</span>
					</div>
				) : (
					<div className='flex text-2xl mx-3 font-bold text-white rounded-full w-12 h-12 border border-slate-50'>
						<span className='m-auto'>4</span>
					</div>
				)}
			</nav>
		</section>
	);
};
