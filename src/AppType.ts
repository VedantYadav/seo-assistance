export type LinkAPIResponseType = {
  category: string;
  // eslint-disable-next-line camelcase
  category_link: string;
  link: string;
  sentence: string;
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
