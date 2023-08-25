import { createSlice } from '@reduxjs/toolkit';

const planMonthlyState = {
	monthlyState: true,

	selectedPlanMonthly: {
		selectedArcadePlan: false,
		selectedAdvancedPlan: false,
		selectedProPlan: false,
	},

	selectedPlanYearly: {
		selectedArcadePlan: false,
		selectedAdvancedPlan: false,
		selectedProPlan: false,
	},
};

export const planSlice = createSlice({
	name: 'plan',

	initialState: planMonthlyState,

	reducers: {
		switchMonthlyState: (state, action) => {
			state.monthlyState = action.payload;
		},

		setSelectedArcadePlanM: (state, action) => {
			state.selectedPlanMonthly.selectedArcadePlan = action.payload;
			state.selectedPlanMonthly.selectedAdvancedPlan = false;
			state.selectedPlanMonthly.selectedProPlan = false;

			state.selectedPlanYearly.selectedArcadePlan = false;
			state.selectedPlanYearly.selectedAdvancedPlan = false;
			state.selectedPlanYearly.selectedProPlan = false;
		},
		setSelectedAdvancedPlanM: (state, action) => {
			state.selectedPlanMonthly.selectedAdvancedPlan = action.payload;
			state.selectedPlanMonthly.selectedArcadePlan = false;
			state.selectedPlanMonthly.selectedProPlan = false;

			state.selectedPlanYearly.selectedArcadePlan = false;
			state.selectedPlanYearly.selectedAdvancedPlan = false;
			state.selectedPlanYearly.selectedProPlan = false;
		},
		setSelectedProPlanM: (state, action) => {
			state.selectedPlanMonthly.selectedProPlan = action.payload;
			state.selectedPlanMonthly.selectedArcadePlan = false;
			state.selectedPlanMonthly.selectedAdvancedPlan = false;

			state.selectedPlanYearly.selectedArcadePlan = false;
			state.selectedPlanYearly.selectedAdvancedPlan = false;
			state.selectedPlanYearly.selectedProPlan = false;
		},

		setSelectedArcadePlanY: (state, action) => {
			state.selectedPlanYearly.selectedArcadePlan = action.payload;
			state.selectedPlanYearly.selectedAdvancedPlan = false;
			state.selectedPlanYearly.selectedProPlan = false;

			state.selectedPlanMonthly.selectedArcadePlan = false;
			state.selectedPlanMonthly.selectedAdvancedPlan = false;
			state.selectedPlanMonthly.selectedProPlan = false;
		},
		setSelectedAdvancedPlanY: (state, action) => {
			state.selectedPlanYearly.selectedAdvancedPlan = action.payload;
			state.selectedPlanYearly.selectedArcadePlan = false;
			state.selectedPlanYearly.selectedProPlan = false;

			state.selectedPlanMonthly.selectedArcadePlan = false;
			state.selectedPlanMonthly.selectedAdvancedPlan = false;
			state.selectedPlanMonthly.selectedProPlan = false;
		},
		setSelectedProPlanY: (state, action) => {
			state.selectedPlanYearly.selectedProPlan = action.payload;
			state.selectedPlanYearly.selectedArcadePlan = false;
			state.selectedPlanYearly.selectedAdvancedPlan = false;

			state.selectedPlanMonthly.selectedArcadePlan = false;
			state.selectedPlanMonthly.selectedAdvancedPlan = false;
			state.selectedPlanMonthly.selectedProPlan = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	switchMonthlyState,
	setSelectedArcadePlanM,
	setSelectedAdvancedPlanM,
	setSelectedProPlanM,
	setSelectedArcadePlanY,
	setSelectedAdvancedPlanY,
	setSelectedProPlanY,
} = planSlice.actions;
