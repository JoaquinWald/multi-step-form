import { createSlice } from '@reduxjs/toolkit';

const pickAddOnsState = {
	selectedPlanMonthly: {
		selectedOnlineService: false,
		selectedLargerStorage: false,
		selectedCustomizable: false,
	},
	selectedPlanYearly: {
		selectedOnlineService: false,
		selectedLargerStorage: false,
		selectedCustomizable: false,
	},
};

export const addOnsSlice = createSlice({
	name: 'addOns',

	initialState: pickAddOnsState,

	reducers: {
		setOnlineServiceM: (state, action) => {
			state.selectedPlanMonthly.selectedOnlineService = action.payload;

			state.selectedPlanYearly.selectedOnlineService = false;
			state.selectedPlanYearly.selectedLargerStorage = false;
			state.selectedPlanYearly.selectedCustomizable = false;
		},
		setLargerStorageM: (state, action) => {
			state.selectedPlanMonthly.selectedLargerStorage = action.payload;

			state.selectedPlanYearly.selectedOnlineService = false;
			state.selectedPlanYearly.selectedLargerStorage = false;
			state.selectedPlanYearly.selectedCustomizable = false;
		},
		setCustomizableM: (state, action) => {
			state.selectedPlanMonthly.selectedCustomizable = action.payload;

			state.selectedPlanYearly.selectedOnlineService = false;
			state.selectedPlanYearly.selectedLargerStorage = false;
			state.selectedPlanYearly.selectedCustomizable = false;
		},

		setOnlineServiceY: (state, action) => {
			state.selectedPlanYearly.selectedOnlineService = action.payload;

			state.selectedPlanMonthly.selectedOnlineService = false;
			state.selectedPlanMonthly.selectedLargerStorage = false;
			state.selectedPlanMonthly.selectedCustomizable = false;
		},
		setLargerStorageY: (state, action) => {
			state.selectedPlanYearly.selectedLargerStorage = action.payload;

			state.selectedPlanMonthly.selectedOnlineService = false;
			state.selectedPlanMonthly.selectedLargerStorage = false;
			state.selectedPlanMonthly.selectedCustomizable = false;
		},
		setCustomizableY: (state, action) => {
			state.selectedPlanYearly.selectedCustomizable = action.payload;

			state.selectedPlanMonthly.selectedOnlineService = false;
			state.selectedPlanMonthly.selectedLargerStorage = false;
			state.selectedPlanMonthly.selectedCustomizable = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOnlineServiceM, setLargerStorageM, setCustomizableM, setOnlineServiceY, setLargerStorageY, setCustomizableY } = addOnsSlice.actions;
