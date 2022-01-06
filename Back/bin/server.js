const app = require('../app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Your App is waiting for you at http://localhost:${port}`);
});