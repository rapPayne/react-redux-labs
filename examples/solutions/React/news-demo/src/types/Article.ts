// This file and the others around it were created on https://app.quicktype.io/

import { Source } from './Source';

export interface Article {
  source:      Source;
  author:      null | string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date;
  content:     null | string;
}