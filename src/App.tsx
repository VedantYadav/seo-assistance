/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import Highlighter from 'react-highlight-words';

import { LinkAPIResponseType, TagAPIResponseType } from 'AppType';
import { Interlink } from 'component/Interlink';
import { TextArea } from 'component/TextArea';
import { apiCall } from 'component/Util';

import * as S from './AppStyle';
import { HighlightText } from './AppStyle';

export const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [show, setShow] = useState<boolean>(true);
  const [link, setLinks] = useState<LinkAPIResponseType[]>([]);
  const [tags, setTags] = useState<TagAPIResponseType[]>([]);
  const [wordsToHighlight, setWordsToHighlight] = useState<string[]>([]);
  /*
  const callApi = async (): Promise<void> => {

    const [responseLink, responseTags] = await Promise.all([
      apiCall('https://seo-http-server.dev.seo-interlinking.br-dev.de/predict', text),
      apiCall('https://seo-http-server.dev.seo-ml.br-dev.de/predict', text),
    ]);

    setLinks(responseLink);
    setTags(responseTags);
    setWordsToHighlight(responseTags.map((x: any) => x.tag));
    setShow(false);
  };
  */
  const fetchInterlinkedArticles = async (): Promise<void> => {
    const responseLink = await apiCall('https://seo-pages-interlinking.dev.seo-interlinking.br-dev.de/predict', text);
    setLinks(responseLink);
    setWordsToHighlight(responseLink.map((x: any) => x.sentence));
    setShow(false);
  };

  const fetchTags = async (): Promise<void> => {
    const responseTags = await apiCall('https://seo-keyword-suggestion.dev.seo-ml.br-dev.de/predict', text);
    setTags(responseTags);
    setWordsToHighlight(responseTags.map((x: any) => x.tag));
    setShow(false);
  };

  return (
    <S.AppContainer>

      <h3>SEO Assistance</h3>

      <section>
        {show && <TextArea fetchInterlinkedArticles={fetchInterlinkedArticles} fetchTags={fetchTags} text={text} setText={setText} />}
        {!show && (
          <S.Highlighter>
                  <Highlighter highlightStyle={HighlightText} searchWords={wordsToHighlight} autoEscape textToHighlight={text} />
          </S.Highlighter>
          ) }
      </section>
      <section>

      <Interlink link={link} text={text} />
      </section>
      <S.TagsSection>
        {tags.length > 0
          && tags.map(({ tag, trends }) => (
            <S.TagWrapper>
              <S.TagHeading key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</S.TagHeading>
              {trends && trends.map(x => (
                <S.Tags>
                {x}
                ,
                {' '}
                {' '}
                </S.Tags>
                ))}
            </S.TagWrapper>
          ))}
      </S.TagsSection>
    </S.AppContainer>
  );
};
