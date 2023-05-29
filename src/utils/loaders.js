export const productLoader = async ({ params }) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}api/product/${params.pid}`)
		const product = await res.json()
		return product.data
	} catch (err) {
		console.log(err.message)
	}
}
