import { forwardRef } from 'react'
import styles from './AddToCart.module.css'
import * as Select from '@radix-ui/react-select'
import { v4 } from 'uuid'

const SizeSelect = forwardRef(({ sizes, value, onValueChange, ...props }, forwardedRef) => {
	return (
		<>
			<Select.Root {...props}>
				<Select.Trigger className={styles.trigger} ref={forwardedRef}>
					<Select.Value asChild>
						{' '}
						<span>{props.value ?? 'Select size'}</span>
					</Select.Value>
					<Select.Icon />
				</Select.Trigger>
				<Select.Content className={styles.select} position='popper'>
					<Select.Viewport className={styles.list}>
						<>
							{!sizes.length
								? null
								: sizes.map(el => (
										<>
											<Select.Item key={v4()} value={el.title} className={styles.item}>
												<Select.ItemText>{el.title}</Select.ItemText>
												<Select.ItemIndicator />
											</Select.Item>
											<Select.Separator className={styles.separator} />
										</>
								  ))}
						</>
					</Select.Viewport>
				</Select.Content>
			</Select.Root>
		</>
	)
})
export default SizeSelect
