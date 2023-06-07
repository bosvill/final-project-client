export const getSubTotal = cart => {
	let totalQuantity = 0
	let totalPrice = 0
	cart.forEach(item => {
		totalQuantity += item.quantity
		totalPrice += item.price * item.quantity
	})
	return { totalPrice, totalQuantity }
}

export const getCardType = cardNumber => {
	let visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/
	let mastercardRegEx = /^5[1-5][0-9]{14}$/
	let amexRegEx = /^3[47][0-9]{13}$/
	let discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/
	if (visaRegEx.test(cardNumber)) {
		return 'Visa'
	} else if (mastercardRegEx.test(cardNumber)) {
		return 'Mastercard'
	} else if (amexRegEx.test(cardNumber)) {
		return 'American Express'
	} else if (discoverRegEx.test(cardNumber)) {
		return 'Discover'
	} else {
		return 'Unknown'
	}
}
