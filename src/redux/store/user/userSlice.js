import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState = {
	name: '',
	email: '',
	phone: '',
};

export const userSlice = createSlice({
	name: 'user',

	initialState: UserEmptyState,

	reducers: {
		createUser: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.phone = action.payload.phone;
		},
		modifyUser: (state, action) => {
			({ ...state, ...action.payload });
		},
		resetUser: () => UserEmptyState,
	},
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;
