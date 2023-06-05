import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useUpdateUserMutation } from '../../features/auth/authApi'
import styles from './Login.module.css'
import { toast } from 'react-hot-toast'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import { useSubmit } from 'react-router-dom'

const Profile = () => {
	//const { user } = useSelector(state => state.auth)
	const {
		auth: {
			user: { _id, name, email, dob, gender, phone, address }
		}
	} = useSelector(state => state)

	console.log(name, email, _id)

	const [updateUserInfo, { isLoading: isUserLoading }] = useUpdateUserMutation()

	// react hook form credentials
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			name,
			email,
			gender,
			phone,
			dob,
			address
		}
	})

	useEffect(() => {
		reset({
			name,
			email,
			gender,
			phone,
			dob,
			address
		})
	}, [reset, name, email, gender, phone, dob, address])

	// date credentials for date of birth datetime-local
	const date = new Date()
	const defaultValue = date.toISOString().substr(0, 10)

	const handleUpdateUserAccount = data => {
		data.dob = data.dateOfBirth
		const { dateOfBirth, ...userData } = data
		updateUserInfo({ uid: _id, userData })
	}
	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>Account Settings</h3>
				<form className={styles.centery} onSubmit={handleSubmit(handleUpdateUserAccount)}>
					<Input
						name='name'
						type='text'
						label='Full Name'
						defaultValue={defaultValue.name}
						rules={{
							required: false
						}}
						register={register}
					/>
					<Input
						name='email'
						type='email'
						label='Email'
						defaultValue={defaultValue.email}
						rules={{ required: false }}
						register={register}
					/>
					<Input
						id='dateOfBirth'
						name='dateOfBirth'
						type='date'
						defaultValue={defaultValue}
						rules={{ required: false }}
						register={register}
					/>

					<Input
						name='address'
						type='text'
						placeholder={!address ? 'Enter your address' : address}
						rules={{ required: false }}
						register={register}
					/>
					<Input name='phone' type='text' rules={{ required: false }} register={register} />
					<div className={styles.fitem}>
						<Button type='submit' children='Update' />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Profile
