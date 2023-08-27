import { NavLink, useNavigate } from 'react-router-dom';
import { GoBackButton } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmButton } from '../../components/ConfirmButton';
import { resetPlan } from '../../../../redux/store/plan/planSlice';
import { resetAddOns } from '../../../../redux/store/add-ons/addOnsSlice';
import { clearUserInfo } from '../../../../services/persist-user-info-service';

export const MonthlyFinishingPlan = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { selectedPlanMonthly } = useSelector((state) => state.plan);
	const { selectedPlanMonthlyAddOns } = useSelector((state) => state.addOns);

	const selectedArcadePlan = selectedPlanMonthly.selectedArcadePlan;
	const selectedAdvancedPlan = selectedPlanMonthly.selectedAdvancedPlan;
	const selectedProPlan = selectedPlanMonthly.selectedProPlan;

	const selectedOnline = selectedPlanMonthlyAddOns.selectedOnlineService;
	const selectedLarger = selectedPlanMonthlyAddOns.selectedLargerStorage;
	const selectedCustomizable = selectedPlanMonthlyAddOns.selectedCustomizable;

	const planPrice = {
		arcadePrice: 9,
		advancedPrice: 12,
		proPrice: 15,
	};
	const { arcadePrice, advancedPrice, proPrice } = planPrice;

	const addOnsPrice = {
		onlinePrice: 1,
		largerPrice: 2,
		customizablePrice: 2,
	};
	const { onlinePrice, largerPrice, customizablePrice } = addOnsPrice;

	const selectedPlan = () => {
		if (selectedArcadePlan) return <>Arcade</>;
		if (selectedAdvancedPlan) return <>Advanced</>;
		if (selectedProPlan) return <>Pro</>;
	};

	const selectedPrice = () => {
		if (selectedArcadePlan) return <>${arcadePrice}/mo</>;
		if (selectedAdvancedPlan) return <>${advancedPrice}/mo</>;
		if (selectedProPlan) return <>${proPrice}/mo</>;
	};

	const sumPlanPrice = (selectedArcadePlan ? 9 : 0) + (selectedAdvancedPlan ? 12 : 0) + (selectedProPlan ? 15 : 0);
	const sumAddOnsPrice = (selectedOnline ? 1 : 0) + (selectedLarger ? 2 : 0) + (selectedCustomizable ? 2 : 0);
	const TOTAL = sumPlanPrice + sumAddOnsPrice;

	const handleConfirm = () => {
		if (sumPlanPrice === 0) return;

		dispatch(resetPlan());
		dispatch(resetAddOns());
		clearUserInfo();

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
								<h3 className='text-2xl font-bold text-blue-900'>{selectedPlan()} (Monthly)</h3>
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
						<div className='mx-1'>{selectedOnline ? <span className='text-xl font-medium text-blue-900'>+${onlinePrice}/mo</span> : <></>}</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>{selectedLarger ? <h3 className='text-xl font-medium text-gray-400'>Larger storage</h3> : <></>}</div>
						</div>
						<div className='mx-1'>{selectedLarger ? <span className='text-xl font-medium text-blue-900'>+${largerPrice}/mo</span> : <></>}</div>
					</section>

					<section className='flex p-4 pt-0 justify-between items-center'>
						<div className='flex items-center'>
							<div>{selectedCustomizable ? <h3 className='text-xl font-medium text-gray-400'>Customizable profile</h3> : <></>}</div>
						</div>
						<div className='mx-1'>
							{selectedCustomizable ? <span className='text-xl font-medium text-blue-900'>+${customizablePrice}/mo</span> : <></>}
						</div>
					</section>
				</article>

				<article className='mt-8'>
					<div className='flex justify-between px-2'>
						<h3 className='text-gray-400 text-xl font-medium'>Total (per month)</h3>
						<span className='text-2xl font-bold text-[#483EFF] md:text-3xl'>${TOTAL}/mo</span>
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
