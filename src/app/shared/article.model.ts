export interface Article {
    articleTitle: string;
    author: string;
    summary: string;
    paragraphs: Array<string>;
    articleImage: File;
    dateAdded: number;
    dateUpdated: number;
  }