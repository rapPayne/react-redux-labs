import { fetchFilmsMiddleware } from './fetchFilmsMiddleware';
import { fetchInitialDataMiddleware } from './fetchInitialDataMiddleware';
import { fetchShowingsMiddleware } from './fetchShowingsMiddleware';
import { fetchTheatersMiddleware } from './fetchTheatersMiddleware';
import { loggingMiddleware } from './loggingMiddleware';

export const middleware = [
  fetchFilmsMiddleware,
  fetchInitialDataMiddleware,
  fetchShowingsMiddleware,
  fetchTheatersMiddleware,
  loggingMiddleware,
];