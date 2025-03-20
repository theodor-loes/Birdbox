const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Log and rewrite requests to /esp-img
app.use('/esp-img', createProxyMiddleware({
    target: 'http://192.168.4.1', // your ESP8266 IP and port
    changeOrigin: true,
    pathRewrite: (path, req) => {
        // Log the original path for debugging
        console.log(`Original path: ${path}`);
        // Remove '/esp-img' from the beginning and prepend '/capture'
        const newPath = '/capture';
        console.log(`Rewritten path: ${newPath}`);
        return newPath;
    },
    timeout: 10000,
    proxyTimeout: 10000,
    onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error');
    }
}));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Mail Thomas: thomaskjesbuh@gmail.com