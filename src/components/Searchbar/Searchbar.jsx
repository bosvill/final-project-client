import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import SearchIcon from '../../icons/SearchIcon'
import Search from './Search'
import styles from './Search.module.css'
import CloseIcon from '../../icons/CloseIcon'

const Searchbar = () => {
	return (
		<div>
			<Popover.Root className={styles.searchbar}>
				<Popover.Trigger className={styles.iconbtn}>
					<SearchIcon />
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content side='left' sideOffset='2' role='modal' className={styles.content}>
						{/* <Popover.Close className='PopoverClose' aria-label='Close'>
							<CloseIcon />
						</Popover.Close> */}
						<Search />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	)
}

export default Searchbar
