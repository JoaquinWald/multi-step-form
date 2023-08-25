import thankImg from '../../assets/images/icon-thank-you.svg';

export const ThankYou = () => {
	return (
		<section className='top-32 w-full h-[410px] flex justify-center md:justify-end md:h-min'>
			<div className='p-10 pb-32 mx-6 w-full max-w-4xl h-[440px] min-h-max rounded-2xl bg-white md:w-2/3 md:pb-14 md:bg-transparent md:px-20 md:pt-40 md:mr-0'>
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
