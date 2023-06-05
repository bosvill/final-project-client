import React from 'react'
import Input from '../UI/Input'

const NumberInput = ({ name, id, register, value, required, onChange }) => {
	function handleChange(event) {
		const value = event.target.value
		const regex = /^([0-9\s]*)$/ // numbers and space and empty
		if (regex.test(value)) {
			onChange(value)
		}
	}

	function handleKeyDown(event) {
		if (event.ctrlKey && (event.key === 'v' || event.key === 'V')) {
			return
		}

		if (
			event.key === 'Delete' ||
			event.key === 'Backspace' ||
			event.key === ' ' ||
			event.key.startsWith('Arrow')
		) {
			return
		}

		if (!/^\d*$/.test(event.key)) {
			event.preventDefault()
		}
	}

	return (
		<>
			<Input
				type='text'
				name={name}
				id={id}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				rules={{ required: ' Address is required!' }}
				register={register}
			/>
		</>
	)
}

export default NumberInput
