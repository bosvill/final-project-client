import React from 'react'
import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

const Contact = () => {
	// react hook form credentials
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()

	const handleContactUsForm = data => {
		console.log(data)
		toast.success('Check console to see response.')
		reset()
	}
	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>Contact Us</h3>
				<form className={styles.centery} onSubmit={handleSubmit(handleContactUsForm)}>
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
					<div className={styles.fitem}>
						<label htmlFor='message' className={styles.label}>
							{errors.message ? (
								<span className={styles.error}>Message field is required!</span>
							) : (
								'Message'
							)}
						</label>

						<textarea
							id='message'
							name='message'
							type='message'
							autoComplete='off'
							placeholder='Enter your message'
							{...register('message', { required: true })}
							className={styles.textarea}
							rows='6'
						/>
					</div>
					<div className={styles.fitem}>
						<Button children='Send Message' />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Contact
