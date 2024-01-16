import { useNavigate } from 'react-router-dom';
import { NextStepButton } from '../../components/NextStepButton';
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/store/user/userSlice';
import { manageUserInfo } from '../../services/persist-user-info-service';

export const PersonalInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setValue,
		setFocus,
	} = useForm({
		defaultValues: {
			name: 'Stephen King',
			email: 'stephenking@lorem.com',
			phone: 1234567890,
		},
	});

	//Foco en el input 'name' para que poder cambiar de pag. al hacer click en next step si es que se dejaron los campos idénticos.
	useEffect(() => {
		setFocus('name');
	}, [setFocus]);

	useEffect(() => {
		// Get the data of localStorage.
		const userInfoFromLocalStorage = localStorage.getItem('user_info');

		if (userInfoFromLocalStorage) {
			const parsedUserInfo = JSON.parse(userInfoFromLocalStorage);

			// Set the values predeterminados in the fields.
			setValue('name', parsedUserInfo.name);
			setValue('email', parsedUserInfo.email);
			setValue('phone', parsedUserInfo.phone);
		}
	}, [setValue]);

	const dispatch = useDispatch();
	const onSubmit = handleSubmit((data) => {
		if (!isValid) return;
		dispatch(createUser(data));
		manageUserInfo(data);
	});

	const buttonRef = useRef();

	const navigate = useNavigate();

	const handleNextPage = () => {
		if (!isValid) return;

		navigate('/select-plan');
	};

	return (
		<section className='top-32 w-full h-screen flex justify-center md:justify-end md:h-min animate__animated animate__fadeIn'>
			<div className='p-10 pb-10 mx-6 w-full max-w-4xl h-max rounded-2xl bg-white md:w-7/12 md:pb-14 md:mr-[30px] md:bg-transparent'>
				<article className='grid grid-cols-1'>
					<h1 className='text-4xl font-bold text-blue-900'>Personal info</h1>
					<p className='text-2xl mt-4 font-normal text-gray-400'>Please, provide your name, email address, and phone number.</p>
				</article>

				<article className='grid grid-cols-1 mt-10 m-auto'>
					<form onSubmit={onSubmit}>
						<label htmlFor='name' className='grid mb-6 font-medium'>
							<span className='text-xl pb-1 text-blue-900'>Name</span>
							<input
								{...register('name', {
									required: {
										value: true,
										message: 'This field is required',
									},
									minLength: {
										value: 2,
										message: 'Name needs to have 2 or more letters',
									},
									maxLength: {
										value: 20,
										message: 'Name must have less than 20 letters',
									},
								})}
								type='text'
								// value={}
								name='name'
								id='name'
								placeholder='e.g. Stephen King'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>

							{errors.name && <span className='mt-1 font-bold text-red-600'>{errors.name.message}</span>}
						</label>

						<label htmlFor='email-address' className='grid mb-6 font-medium'>
							<span className='text-xl pb-1 text-blue-900'>Email Address</span>
							<input
								{...register('email', {
									required: {
										value: true,
										message: 'This field is required',
									},
									pattern: {
										value: /^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,4}$/,
										message: 'Email not valid',
									},
								})}
								type='text'
								// value={}
								name='email'
								id='email-address'
								placeholder='e.g. stephenking@lorem.com'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>

							{errors.email && <span className='mt-1 font-bold text-red-600'>{errors.email.message}</span>}
						</label>

						<label htmlFor='phone-number' className='grid mb-6 font-medium'>
							<span className='text-xl pb-1 text-blue-900'>Phone Number</span>
							<input
								{...register('phone', {
									required: {
										value: true,
										message: 'This field is required',
									},
									minLength: {
										value: 6,
										message: 'Phone number needs to have 6 or more nums.',
									},
								})}
								type='number'
								// value={}
								name='phone'
								id='phone-number'
								placeholder='e.g. +1 234 567 890'
								className='h-14 px-5 text-2xl rounded-s-md border w-full'
							/>

							{errors.phone && <span className='mt-1 font-bold text-red-600'>{errors.phone.message}</span>}
						</label>

						<button type='submit' className='hidden' ref={buttonRef} disabled={''}></button>
					</form>
				</article>
			</div>

			<footer className='fixed bottom-0 flex mt-20 h-[12vh] w-full justify-end items-center bg-gray-50 md:absolute md:w-2/3 md:rounded-2xl md:mx-6 md:bg-transparent md:pr-[30px] md:mb-4'>
				<div onClick={() => buttonRef.current.click()}>
					<div onClick={handleNextPage}>
						<NextStepButton />
					</div>
				</div>
			</footer>
		</section>
	);
};
