const next = require('next');
const express = require('express');
const routes = require('./routes');

const app = next({
	dev: true
});
const handler = routes.getRequestHandler(app);
const port = 4000;

app.prepare().then(() => {
	express().use(handler).listen(port);
});