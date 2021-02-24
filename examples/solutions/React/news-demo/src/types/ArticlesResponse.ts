// This file and the others around it were created on https://app.quicktype.io/

import { Article } from './Article';

export interface ArticlesResponse {
  status:       string;
  totalResults: number;
  articles:     Article[];
}
