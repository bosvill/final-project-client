import React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styles from './CheckoutModal.module.css'



export default ({ open, setOpen }) => {
	const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
	return (
		<AlertDialog.Root open={open} onOpenChange={setOpen}>
			{/* <AlertDialog.Trigger asChild>Open</AlertDialog.Trigger> */}
			<AlertDialog.Portal>
				<AlertDialog.Overlay className={styles.overlay}/>
				<AlertDialog.Content className={styles.content}>
					<AlertDialog.Title className={styles.title}>Payment successful</AlertDialog.Title>
					<AlertDialog.Description className={styles.description}>
						Your payment has been successfully submitted. We’ve sent you an email with all of the
						details of your order.
					</AlertDialog.Description>
					<AlertDialog.Action asChild>
            <button className={styles.btn} onClick={() => {
              wait().then(() => setOpen(false))}}>Close</button>
          </AlertDialog.Action>

				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}
