import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';
import { planSlice } from './plan/planSlice';
import { addOnsSlice } from './add-ons/addOnsSlice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		plan: planSlice.reducer,
		addOns: addOnsSlice.reducer,
	},
});
