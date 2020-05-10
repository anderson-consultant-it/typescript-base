import 'reflect-metadata';

import express from 'express';
import routes from './routes';

// Remove comment to enable database using postgres and migrations
// import './database';

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
