const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
	dev
})
const handle = app.getRequestHandler()

const todos = [{
		"id": 1,
		"title": "Learn React.js"
	},
	{
		"id": 2,
		"title": "Learn Next.js"
	},
	{
		"id": 3,
		"title": "Learn Express"
	},
	{
		"id": 4,
		"title": "Learn Redux"
	},
	{
		"id": 5,
		"title": "Learn Redux-saga"
	}
]

app.prepare().then(() => {
	const server = express()

	server.get('/api/v1/todo', (req, res) => {
		let result = JSON.stringify(todos)
		return res.end(result)
	})

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})