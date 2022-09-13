const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
var ReactDOMServer = require('react-dom/server');
const React = require('react');
import App from '../src/App';

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(<App />);
  const html = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>

<body>
    <div id="root">${component}</div>
    <script src="./static/bundle.js"></script>
</body>

</html>`;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
