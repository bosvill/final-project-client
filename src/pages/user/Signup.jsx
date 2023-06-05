import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSignupMutation } from '../../features/auth/authApi'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import styles from './Login.module.css'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

const Signup = () => {
	// react hook form credentials
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const [apiResult, setApiResult] = useState({
		isSuccess: true,
		message: ''
	})

	// server side credentials
	const [signup, { isLoading: registering, isSuccess: registered }] = useSignupMutation()

	// user credentials from state
	const { user } = useSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (Object.keys(user).length) {
			navigate('/')
		}
	}, [user])

	useEffect(() => {
		if (registering) {
			toast.loading('Signing up.', { id: 'signup_user' })
		} else if (registered) {
			if (apiResult.isSuccess === true) {
				toast.success('Signed up.', {
					id: 'signup_user'
				})
			} else {
				toast.error(apiResult.message, {
					id: 'signup_user'
				})
			}
		}
	}, [registering, registered, apiResult])

	// submit signup form
	const handleSignupForm = async data => {
		const result = await signup(data)
		if (result.data.acknowledgement === true) {
			setApiResult({
				isSuccess: result.data.acknowledgement,
				message: result.data.description
			})
			navigate('/sign-in')
		}
	}

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>Create your account</h3>
				<form className={styles.centery} onSubmit={handleSubmit(handleSignupForm)}>
					<Input
						name='name'
						type='text'
						label='Full Name'
						autoComplete='off'
						errors={errors.name}
						rules={{
							required: 'Full Name is required',
							pattern: { value: name.includes(' '), message: 'Full Name is required' }
						}}
						register={register}
					/>
					<Input
						name='email'
						type='email'
						label='Email'
						autoComplete='off'
						errors={errors?.email}
						register={register}
						rules={{
							required: 'Email is required',
							pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' }
						}}
					/>
					<Input
						name='password'
						type='password'
						label='Password'
						autoComplete='off'
						errors={errors?.password}
						register={register}
						rules={{
							required: 'Password is required',
							minLength: { value: 8, message: 'Min length 8' },
							pattern: {
								value:
									/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?@]{8,20}$/,
								message: '1 uppercase, 1 lowercase, 1 number and 1 special character'
							}
						}}
					/>
					<Input
						name='confirmPassword'
						type='password'
						label='Confirm Password'
						autoComplete='off'
						errors={errors?.confirmPassword}
						register={register}
						rules={{
							required: 'Password is required',
							pattern: {
								value: watch('password') !== watch('confirmPassword'),
								message: 'No match'
							}
						}}
					/>
					<div className={styles.fitem}>
						<Link to='/sign-in' className={styles.link}>
							Have an account? Login
						</Link>
					</div>
					<div className={styles.fitem}>
						<Button type='submit' children='Sing Up' />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Signup
