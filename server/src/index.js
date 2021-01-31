import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import stateRouting from './middleware/routing.mw';
import configurePassport from './config/passport';



const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

/* Make all http request https */
app.use(function(req, res, next) {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
      res.redirect('https://' + req.get('Host') + req.url);
    } else
      next();
  });
app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

configurePassport(app);

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
