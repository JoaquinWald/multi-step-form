import desktopHeaderImg from '../assets/images/bg-sidebar-desktop.svg';
import mobileHeaderImg from '../assets/images/bg-sidebar-mobile.svg';
import { ButtonsSteps } from './ButtonsSteps';

export const Header = () => {
	return (
		<header className='relative w-full row-start-1'>
			<figure className=''>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet={desktopHeaderImg}
						alt=''
					/>
					<img
						src={mobileHeaderImg}
						alt=''
						className='w-full md:w-1/3'
					/>
				</picture>
			</figure>

			<ButtonsSteps />
		</header>
	);
};
