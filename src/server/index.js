import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Launched webserver on http://localhost:${server.address().port}`);
});
