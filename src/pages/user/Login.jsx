import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSigninMutation } from '../../features/auth/authApi'
import { toast } from 'react-hot-toast'
import styles from './Login.module.css'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

const Login = () => {
	// react hook form credentials
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const [apiResult, setApiResult] = useState({
		isSuccess: false,
		message: ''
	})

	// server side credentials
	const [signin, { isLoading: logging, isSuccess: logged }] = useSigninMutation()

	// user credentials from state
	const navigate = useNavigate()

	useEffect(() => {
		// sign in
		if (logging) {
			console.log(logging)
			toast.loading('Signing in...', { id: 'signin_user' })
		} else if (logged) {
			console.log(apiResult)
			if (apiResult.isSuccess === true) {
				toast.success('Welcome back!', {
					id: 'signin_user'
				})
				navigate('..')
			} else {
				console.log(apiResult.message)
				toast.error(apiResult.message, {
					id: 'signin_user'
				})
			}
		}
	}, [logging, logged, apiResult])

	const handleSigninForm = async data => {
		const result = await signin(data)
		if (result.data.accessToken) {
			setApiResult({
				isSuccess: true,
				message: ''
			})
		} else {
			setApiResult({
				isSuccess: result.data.acknowledgement,
				message: result.data.description
			})
		}
	}

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> My Cortado Login</h3>
				<form action='' className={styles.centery} onSubmit={handleSubmit(handleSigninForm)}>
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
							minLength: { value: 8, message: 'Minimum 8 characters' }
						}}
					/>

					<div className={styles.fitem}>
						<Link to='/forgot-password' className={styles.link}>
							Lost your password?
						</Link>
						<Link to='/sign-up' className={styles.link}>
							Don't have an account?
						</Link>
					</div>
					<div className={styles.fitem}>
						<Button type='submit' children='Sign In' />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Login
