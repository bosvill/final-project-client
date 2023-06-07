export function availableColors(arr) {
	return [...new Set(arr.map(el => el.color))]
}

export function filterSizesByColor(array, color) {
	return array.filter(item => item.color === color).map(item => item.size)
}

export function availableColorNames(arr) {
	return [...new Set(arr.map(el =>el.colorName))]
}
