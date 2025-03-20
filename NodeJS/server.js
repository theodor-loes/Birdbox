const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Log and rewrite requests to /esp-img
app.use('/esp-img', createProxyMiddleware({
    target: 'http://192.168.4.1', // ESP8266 IP
    changeOrigin: true,
    pathRewrite: (path, req) => {
        const newPath = '/capture';
        return newPath;
    },
    timeout: 10000, // Give it time to collect image (10 sec)
    proxyTimeout: 10000,
    onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error');
    }
}));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});