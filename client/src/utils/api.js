
export async function callApi(url, method, data) {

	const res = await fetch(url, {
		method,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			"Content-Type": 'application/json'
		},
		body: JSON.stringify(data),
	})

	return res.json()

}