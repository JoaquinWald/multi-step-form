import thankImg from '../../assets/images/icon-thank-you.svg';

export const ThankYou = () => {
	return (
		<section className='w-full h-max flex justify-center'>
			<div className='p-10 py-20 mx-6 w-full max-w-4xl h-max min-h-max rounded-2xl bg-white'>
				<article className='grid grid-cols-1 justify-items-center'>
					<figure className='mb-6'>
						<img
							src={thankImg}
							alt='thank you image'
							className='w-20'
						/>
					</figure>
					<h1 className='text-4xl font-bold text-blue-900'>Thank you!</h1>
					<p className='text-[1.7rem] mt-8 text-center font-normal text-gray-400'>
						Thanks for confirming your subscription! <br />
						We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
					</p>
				</article>
			</div>
		</section>
	);
};
