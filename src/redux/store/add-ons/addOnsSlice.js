import { createSlice } from '@reduxjs/toolkit';

const pickAddOnsState = {
	selectedPlanMonthlyAddOns: {
		selectedOnlineService: false,
		selectedLargerStorage: false,
		selectedCustomizable: false,
	},
	selectedPlanYearlyAddOns: {
		selectedOnlineService: false,
		selectedLargerStorage: false,
		selectedCustomizable: false,
	},
};

export const addOnsSlice = createSlice({
	name: 'addOns',

	initialState: pickAddOnsState,

	reducers: {
		resetAddOns: () => pickAddOnsState,

		setOnlineServiceM: (state, action) => {
			state.selectedPlanMonthlyAddOns.selectedOnlineService = action.payload;

			state.selectedPlanYearlyAddOns.selectedOnlineService = false;
			state.selectedPlanYearlyAddOns.selectedLargerStorage = false;
			state.selectedPlanYearlyAddOns.selectedCustomizable = false;
		},
		setLargerStorageM: (state, action) => {
			state.selectedPlanMonthlyAddOns.selectedLargerStorage = action.payload;

			state.selectedPlanYearlyAddOns.selectedOnlineService = false;
			state.selectedPlanYearlyAddOns.selectedLargerStorage = false;
			state.selectedPlanYearlyAddOns.selectedCustomizable = false;
		},
		setCustomizableM: (state, action) => {
			state.selectedPlanMonthlyAddOns.selectedCustomizable = action.payload;

			state.selectedPlanYearlyAddOns.selectedOnlineService = false;
			state.selectedPlanYearlyAddOns.selectedLargerStorage = false;
			state.selectedPlanYearlyAddOns.selectedCustomizable = false;
		},

		setOnlineServiceY: (state, action) => {
			state.selectedPlanYearlyAddOns.selectedOnlineService = action.payload;

			state.selectedPlanMonthlyAddOns.selectedOnlineService = false;
			state.selectedPlanMonthlyAddOns.selectedLargerStorage = false;
			state.selectedPlanMonthlyAddOns.selectedCustomizable = false;
		},
		setLargerStorageY: (state, action) => {
			state.selectedPlanYearlyAddOns.selectedLargerStorage = action.payload;

			state.selectedPlanMonthlyAddOns.selectedOnlineService = false;
			state.selectedPlanMonthlyAddOns.selectedLargerStorage = false;
			state.selectedPlanMonthlyAddOns.selectedCustomizable = false;
		},
		setCustomizableY: (state, action) => {
			state.selectedPlanYearlyAddOns.selectedCustomizable = action.payload;

			state.selectedPlanMonthlyAddOns.selectedOnlineService = false;
			state.selectedPlanMonthlyAddOns.selectedLargerStorage = false;
			state.selectedPlanMonthlyAddOns.selectedCustomizable = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { resetAddOns, setOnlineServiceM, setLargerStorageM, setCustomizableM, setOnlineServiceY, setLargerStorageY, setCustomizableY } =
	addOnsSlice.actions;
