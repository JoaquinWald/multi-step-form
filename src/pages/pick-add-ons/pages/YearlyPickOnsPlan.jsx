import { useNavigate } from 'react-router-dom';
import { GoBackButton, NextStepButton } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { setCustomizableY, setLargerStorageY, setOnlineServiceY } from '../../../redux/store/add-ons/addOnsSlice';

export const YearlyPickOnsPlan = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { selectedPlanYearly } = useSelector((state) => state.addOns);
	const selectedOnlineService = selectedPlanYearly.selectedOnlineService;
	const selectedLargerStorage = selectedPlanYearly.selectedLargerStorage;
	const selectedCustomizable = selectedPlanYearly.selectedCustomizable;

	const onlineServiceRef = useRef();
	const largerStorageRef = useRef();
	const customizableRef = useRef();

	const handleOnlineClick = () => {
		onlineServiceRef.current.click();
		dispatch(setOnlineServiceY(!selectedOnlineService));
	};
	const handleLargerClick = () => {
		largerStorageRef.current.click();
		dispatch(setLargerStorageY(!selectedLargerStorage));
	};
	const handleCustomizableClick = () => {
		customizableRef.current.click();
		dispatch(setCustomizableY(!selectedCustomizable));
	};

	const handleNextPage = () => {
		if (!(selectedOnlineService || selectedLargerStorage || selectedCustomizable)) return;

		navigate('/finishing-up');
	};

	const handleBackPage = () => {
		navigate('/select-plan');
	};

	return (
		<section className='top-32 w-full h-[410px] flex justify-center md:justify-end md:h-min'>
			<div className='p-10 pb-32 mx-6 w-full max-w-4xl h-[440px] min-h-max rounded-2xl bg-white md:w-2/3 md:pb-14 md:mr-0 md:bg-transparent md:px-20 md:pl-20'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Pick add-ons</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>Add-ons help enhance your gaming experience.</p>
				</article>

				<article>
					<section
						onClick={handleOnlineClick}
						className={`${
							selectedOnlineService ? 'bg-blue-100 border-blue-800' : ''
						} flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer hover:border-blue-800`}
					>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-2 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
									ref={onlineServiceRef}
									onClick={() => onlineServiceRef.current.click()}
									defaultChecked={selectedOnlineService}
								/>
							</label>
							<div className=''>
								<h3 className='text-[1.4rem] font-bold text-blue-900'>Online service</h3>
								<span className='text-gray-400 text-lg font-medium'>Acces to multiplayer games</span>
							</div>
						</div>
						<div className='mx-0'>
							<span className='-mr-2 text-blue-700 md:text-xl'>+$10/yr</span>
						</div>
					</section>

					<section
						onClick={handleLargerClick}
						className={`${
							selectedLargerStorage ? 'bg-blue-100 border-blue-800' : ''
						} flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer hover:border-blue-800`}
					>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-2 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
									ref={largerStorageRef}
									onClick={() => largerStorageRef.current.click()}
									defaultChecked={selectedLargerStorage}
								/>
							</label>
							<div>
								<h3 className='text-[1.4rem] font-bold text-blue-900'>Larger storage</h3>
								<span className='text-gray-400 text-lg font-medium'>Extra 1TB of cloud save</span>
							</div>
						</div>
						<div className='mx-0'>
							<span className='-mr-2 text-blue-700 md:text-xl'>+$20/yr</span>
						</div>
					</section>

					<section
						onClick={handleCustomizableClick}
						className={`${
							selectedCustomizable ? 'bg-blue-100 border-blue-800' : ''
						} flex p-4 my-4 justify-between items-center rounded-xl border border-gray-200 cursor-pointer hover:border-blue-800`}
					>
						<div className='flex items-center'>
							<label
								htmlFor=''
								className='m-2 mr-6'
							>
								<input
									type='checkbox'
									name=''
									id=''
									className='w-7 h-7'
									ref={customizableRef}
									onClick={() => customizableRef.current.click()}
									defaultChecked={selectedCustomizable}
								/>
							</label>
							<div>
								<h3 className='text-[1.4rem] font-bold text-blue-900'>Customizable profile</h3>
								<span className='text-gray-400 text-lg font-medium'>Custom theme on your profile</span>
							</div>
						</div>
						<div className='mx-0'>
							<span className='-mr-2 text-blue-700 md:text-xl'>+$20/yr</span>
						</div>
					</section>
				</article>
			</div>
			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-between items-center bg-gray-50 md:absolute md:w-2/3 md:rounded-2xl md:mx-6 md:bg-transparent md:pr-[30px] md:pl-20'>
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
