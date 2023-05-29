import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useForgotPasswordMutation } from '../../features/auth/authApi'
import styles from './Login.module.css'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

const ForgotPassword = () => {
	// react hook form credentials
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	// server side credentials
	const [forgotPassword, { isLoading: resetting, isSuccess: reset }] = useForgotPasswordMutation()

	// user credentials from state
	const { user } = useSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (Object.keys(user).length) {
			navigate('/')
		}
	}, [user, navigate])

	useEffect(() => {
		// reset password
		if (resetting) {
			toast.loading('Resetting password...', { id: 'reset_password' })
		} else if (reset) {
			toast.success('Password resetted', {
				id: 'reset_password'
			})
		}
	}, [resetting, reset])

	const handleForgotPasswordForm = data => {
		forgotPassword(data)
	}

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>Reset password</h3>
				<form className={styles.centery} onSubmit={handleSubmit(handleForgotPasswordForm)}>
					<Input
						name='email'
						type='email'
						label='Email'
						autoComplete='off'
						errors={errors?.email}
						rules={{
							required: 'Email is required',
							pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' }
						}}
						register={register}
					/>
					<Input
						name='password'
						type='password'
						label='New Password'
						autoComplete='off'
						errors={errors?.password}
						rules={{
							required: 'Password is required',
							minLength: { value: 8, message: 'Minimum 8 characters' }
						}}
						register={register}
					/>

					<div className={styles.fitem}>
						<Link to='/sign-in' className={styles.link}>
							Found your password? Login
						</Link>
					</div>
					<div className={styles.fitem}>
						<Button type='submit' children='Reset' />
					</div>
				</form>
			</div>
		</main>
	)
}

export default ForgotPassword
