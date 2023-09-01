import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb+srv://root:12345@cluster0.dtdhtk4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar ao mongo'));

