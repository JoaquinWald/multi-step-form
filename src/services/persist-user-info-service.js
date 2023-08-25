export const persistUserState = (userInfo) => {
	localStorage.setItem('user_info', JSON.stringify({ ...userInfo }));
};

export const clearUserInfo = () => {
	localStorage.setItem('user_info', '');
};

export const manageUserInfo = (user) => {
	persistUserState(user);
};
