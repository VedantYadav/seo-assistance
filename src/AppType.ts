/* eslint-disable camelcase */
export type LinkAPIResponseType = {
  category: string;
  // eslint-disable-next-line camelcase
  category_link: string;
  link: string;
  sentence: string;
  teaser_image: string;
  teaser_text: string;
  title: string;
};

export type TagAPIResponseType = {
  tag: string;
  trends: string[];
};

export type TextAreaProps = {
    fetchInterlinkedArticles: () => void;
    fetchTags: () => void;
    setText: (val: string) => void;
    text: string;
};
