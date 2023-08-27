import { NavLink, useNavigate } from 'react-router-dom';
import { GoBackButton } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmButton } from '../../components/ConfirmButton';
import { resetPlan } from '../../../../redux/store/plan/planSlice';
import { resetAddOns } from '../../../../redux/store/add-ons/addOnsSlice';

export const YearlyFinishingPlan = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { selectedPlanYearly } = useSelector((state) => state.plan);
	const { selectedPlanYearlyAddOns } = useSelector((state) => state.addOns);

	const selectedArcadePlan = selectedPlanYearly.selectedArcadePlan;
	const selectedAdvancedPlan = selectedPlanYearly.selectedAdvancedPlan;
	const selectedProPlan = selectedPlanYearly.selectedProPlan;

	const selectedOnline = selectedPlanYearlyAddOns.selectedOnlineService;
	const selectedLarger = selectedPlanYearlyAddOns.selectedLargerStorage;
	const selectedCustomizable = selectedPlanYearlyAddOns.selectedCustomizable;

	const planPrice = {
		arcadePrice: 90,
		advancedPrice: 120,
		proPrice: 150,
	};

	const addOnsPrice = {
		onlinePrice: 10,
		largerPrice: 20,
		customizablePrice: 20,
	};

	const selectedPlan = () => {
		if (selectedArcadePlan) return <>Arcade</>;
		if (selectedAdvancedPlan) return <>Advanced</>;
		if (selectedProPlan) return <>Pro</>;
	};

	const selectedPrice = () => {
		if (selectedArcadePlan) return <>${planPrice.arcadePrice}/yr</>;
		if (selectedAdvancedPlan) return <>${planPrice.advancedPrice}/yr</>;
		if (selectedProPlan) return <>${planPrice.proPrice}/yr</>;
	};

	const sumPlanPrice = (selectedArcadePlan ? 90 : 0) + (selectedAdvancedPlan ? 120 : 0) + (selectedProPlan ? 150 : 0);
	const sumAddOnsPrice = (selectedOnline ? 10 : 0) + (selectedLarger ? 20 : 0) + (selectedCustomizable ? 20 : 0);
	const TOTAL = sumPlanPrice + sumAddOnsPrice;

	const handleConfirm = () => {
		if (sumPlanPrice === 0) return;

		dispatch(resetPlan());
		dispatch(resetAddOns());

		navigate('/thank-you');
	};

	const handleBackPage = () => {
		navigate('/pick-add-ons');
	};

	return (
		<section className='top-32 w-full h-[410px] flex justify-center md:justify-end md:h-min animate__animated animate__fadeIn'>
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
								<h3 className='text-2xl font-bold text-blue-900'>{selectedPlan()} (Yearly)</h3>
								<NavLink
									to='/select-plan'
									className='text-gray-400 underline text-xl font-medium hover:text-blue-600'
								>
									Change
								</NavLink>
							</div>
						</div>
						<div className='mx-1'>
							<span className='text-blue-900 font-bold text-xl'>{selectedPrice()}</span>
						</div>
					</section>

					<div className='flex justify-center'>
						<hr className='border-gray-300 -border w-11/12' />
					</div>

					{/* Add-ons selected section */}
					<section className='flex p-4 justify-between items-center'>
						<div className='flex items-center'>
							<div>{selectedOnline ? <h3 className='text-xl font-medium text-gray-400'>Online service</h3> : <></>}</div>
						</div>
						<div className='mx-1'>
							{selectedOnline ? <span className='text-xl font-medium text-blue-900'>+${addOnsPrice.onlinePrice}/yr</span> : <></>}
						</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>{selectedLarger ? <h3 className='text-xl font-medium text-gray-400'>Larger storage</h3> : <></>}</div>
						</div>
						<div className='mx-1'>
							{selectedLarger ? <span className='text-xl font-medium text-blue-900'>+${addOnsPrice.largerPrice}/yr</span> : <></>}
						</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>{selectedCustomizable ? <h3 className='text-xl font-medium text-gray-400'>Customizable profile</h3> : <></>}</div>
						</div>
						<div className='mx-1'>
							{selectedCustomizable ? <span className='text-xl font-medium text-blue-900'>+${addOnsPrice.customizablePrice}/yr</span> : <></>}
						</div>
					</section>
				</article>

				<article className='mt-8'>
					<div className='flex justify-between px-2'>
						<h3 className='text-gray-400 text-xl font-medium'>Total (per year)</h3>
						<span className='text-2xl font-bold text-blue-700'>${TOTAL}/yr</span>
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
