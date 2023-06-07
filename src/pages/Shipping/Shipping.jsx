import React from 'react'
import styles from './Site.module.css'
import { Link } from 'react-router-dom'

const Shipping = () => {
	return (
		<div className={styles.container}>
			<main className={styles.centerY}>
				<article className={styles.block}>
					<h4 className={styles.title}>Shipping</h4>
					<ul>
						<li>
							<a href='#shipping-times' className={styles.titleL}>
								Shipping Times and Costs
							</a>
						</li>
						<li>
							<a href='#shipping-restrictions' className={styles.titleL}>
								Shipping Restrictions
							</a>
						</li>
					</ul>
				</article>
				<article id='#shipping-times' className={styles.block}>
					<h4 className={styles.title}>Shipping Times and Costs</h4>
					<div className={styles.timeGrid}>
						<div>
							<h6 className={styles.h6}>Shipping</h6>
							<p>Standard </p>
							<p>Express* </p>
							<p>Saturday </p>
						</div>
						<div>
							<h6 className={styles.h6}>Times</h6>
							<p>4-7 business days </p>
							<p>2-3 business days </p>
							<p>Guaranteed delivery Saturday morning </p>
						</div>
						<div>
							<h6 className={styles.h6}>Cost</h6>
							<p>€12</p>
							<p>€20</p>
							<p>€35</p>
						</div>
					</div>
					<h5 className={styles.h6}>FREE STANDARD DELIVERY ON ORDERS OVER €200</h5>
				</article>
				<article className={styles.block}>
					<h4 id='shipping-restrictions' className={styles.title}>
						Shipping Restrictions
					</h4>
					<p>
						At this time we are unable to ship orders to {' '}
						<b>
							General Delivery, P.O. Boxes, Jersey, Guernsey and the Channel Islands, Gibraltar,
							Poste Restante.
						</b>
						Orders made to any of these addresses will be cancelled.
					</p>
					<p>
						We deliver to over 100 countries around the world. The delivery address of your order
						must match the country site in which you place your order. Orders made from a different
						country site than the delivery address will be automatically canceled. Please select the
						correct country site for your order from the link in the corner of every page.{' '}
					</p>
				</article>
				<article className={styles.block}>
					<p>
						<b>*Delivery is guaranteed on the 2nd working day</b> for orders placed by 3:30 p.m.
						GMT. Working days are Monday to Friday. Orders are shipped from Italy.
					</p>
					<p>
						<b>Our delivery costs are flat and there are no extra costs at delivery.</b> UPS is our
						courier for all shipments. You will receive an email containing your Tracking Number
						once your package has been shipped from our Italian warehouse.
					</p>
					<p>
						Our courier delivers from Monday to Friday during business hours and will make {''}
						<b>one delivery attempt</b> to the shipping address indicated while placing the order.
						Should this not be possible, the parcel will be delivered to the nearest UPS Access
						Point. For more detailed information on delivery methods, see the relevant article.
					</p>
					<p>
						Our warehouse is closed for these <b>Holidays</b> . Please plan accordingly as orders
						will not be shipped out on these dates. All orders are processed automatically and we
						are unable to expedite or delay shipping times.
					</p>
				</article>
			</main>
		</div>
	)
}

export default Shipping
