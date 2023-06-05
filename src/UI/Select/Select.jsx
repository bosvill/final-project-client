import React, { useState } from 'react'
import * as Select from '@radix-ui/react-select'
import v4 from 'uuid'

const Select = ({ name, values }) => {
	const [value, setValue] = useState('')
	return (
		<Select.Root value={value} onValueChange={setValue}>
			<Select.Trigger className='SelectTrigger' aria-label='Gender'>
				<Select.Value placeholder='Gender' />
				<Select.Icon />
				{/* <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon> */}
			</Select.Trigger>
			<Select.Portal>
				<Select.Content className='SelectContent'>
					<Select.Viewport>
						{values.map(value => (
							<Select.Item value={value} key={v4()}>
								<Select.ItemText />
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	)
}

export default Select
