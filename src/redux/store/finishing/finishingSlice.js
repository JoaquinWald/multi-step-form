import { createSlice } from '@reduxjs/toolkit';

export const finishingSlice = createSlice({
	name: 'finishing',
	initialState: {
		counter: 10,
	},
	reducers: {
		increment: (state /* action */) => {
			state.counter += 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment } = finishingSlice.actions;
