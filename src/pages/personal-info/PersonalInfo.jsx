import { useNavigate } from 'react-router-dom';
import { NextStepButton } from '../../components/NextStepButton';

export const PersonalInfo = () => {
	const navigate = useNavigate();

	const handleNextPage = () => {
		navigate('/select-plan', {
			replace: true,
		});
	};

	return (
		<section className='absolute top-28 max-w-4xl'>
			<div className='p-10 mx-6 rounded-2xl bg-white'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Personal info</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>Please, provide your name, email address, and phone number.</p>
				</article>

				<article className='grid grid-cols-1 mt-10 m-auto'>
					<form onSubmit={() => {}}>
						<label
							htmlFor='name'
							className='grid mb-6 font-medium'
						>
							<span className='text-xl pb-1 text-blue-900'>Name</span>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='e.g. Stephen King'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>
						</label>
						<label
							htmlFor='email-address'
							className='grid mb-6 font-medium'
						>
							<span className='text-xl pb-1 text-blue-900'>Email Address</span>
							<input
								type='text'
								name='email'
								id='email-address'
								placeholder='e.g. stephenking@lorem.com'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>
						</label>
						<label
							htmlFor='phone-number'
							className='grid mb-6 font-medium'
						>
							<span className='text-xl pb-1 text-blue-900'>Phone Number</span>
							<input
								type='number'
								name='phone'
								id='phone-number'
								placeholder='e.g. +1 234 567 890'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>
						</label>
					</form>
				</article>
			</div>

			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-end items-center bg-gray-50'>
				<div onClick={handleNextPage}>
					<NextStepButton />
				</div>
			</footer>
		</section>
	);
};
