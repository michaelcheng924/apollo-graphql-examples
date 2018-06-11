import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.end({
        test: 'hello'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
