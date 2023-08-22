import desktopHeaderImg from '../assets/images/bg-sidebar-desktop.svg';
import mobileHeaderImg from '../assets/images/bg-sidebar-mobile.svg';
import { ButtonsSteps } from './ButtonsSteps';

export const Header = () => {
	return (
		<header className='relative w-full row-start-1 md:grid md:grid-cols-1 md:w-1/3 md:absolute md:h-full md:top-36'>
			<figure className='md:z-10 md:h-full md:p-4'>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet={desktopHeaderImg}
						alt=''
					/>
					<img
						src={mobileHeaderImg}
						alt=''
						className='w-full md:h-[430px] md:object-cover md:rounded-2xl'
					/>
				</picture>
			</figure>

			<ButtonsSteps />
		</header>
	);
};
