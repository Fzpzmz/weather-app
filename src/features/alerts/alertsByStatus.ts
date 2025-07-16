export const alertsByStatus = (status: string) => {
	if (status === 'error') {
		alert('Add a real city')
	}
	if (status === 'success') {
		alert('You`ve added new city!')
	}
}
