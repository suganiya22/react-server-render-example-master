export default ({ markup, helmet,initialState }) => {
	return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="root">${markup}</div>
	<script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
        </script>
	<script src="/static/client.js" async></script>
</body>
</html>`;
};