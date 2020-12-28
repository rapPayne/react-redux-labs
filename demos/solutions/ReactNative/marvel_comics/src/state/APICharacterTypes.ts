/*
 Extracted directly from the HTTP response using http://quicktype.io
What an amazingly useful tool! You put in the response from a server
and it gives you back the implied TypeScript types needed to support
that. Saved me prolly 30 minutes!

In order to match  with the Marvel API at https://developer.marvel.com/docs, 
I did have to rename certain things like ...
- ResponseData -> CharacterDataWrapper
- Result -> Character
- Comics -> ComicsList
- Thumbnail -> Image

And I wanted to make certain data points optional so I added "?" marks.
*/

export interface CharacterDataWrapper {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            CharacterDataContainer;
}

export interface CharacterDataContainer {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface Character {
  id?:          number;
  name:        string;
  description?: string;
  modified?:    string;
  thumbnail?:   Image;
  resourceURI?: string;
  comics?:      ComicList;
  series?:      ComicList;
  stories?:     StoryList;
  events?:      ComicList;
  urls?:        URL[];
}

export interface ComicList {
  available:     number;
  collectionURI: string;
  items:         ComicSummary[];
  returned:      number; 
}

export interface ComicSummary {
  resourceURI: string;
  name:        string;
}

export interface StoryList {
  available:     number;
  collectionURI: string;
  items:         StorySummary[];
  returned:      number;
}

export interface StorySummary {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Cover = "cover",
  InteriorStory = "interiorStory",
  Promo = "promo",
  Recap = "recap",
}

export interface Image {
  path:      string;
  extension: string;
}

export interface URL {
  type: URLType;
  url:  string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}
