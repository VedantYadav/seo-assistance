/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import Highlighter from 'react-highlight-words';
import { useLocation } from 'react-router-dom';

import * as S from '../AppStyle';
import { TagAPIResponseType } from '../AppType';
import { apiCall } from './Util';

const HighlightText = {
  backgroundColor: '#ffff00',
};

const StyledHighlighter = styled.div`
  margin: 2rem 0;
  height: 306px;
  overflow: scroll;
  padding: 1rem;
  border: 1px solid #f0f0f0;

  span {
    white-space: pre-wrap;
  }
`;

export const InterLinkSection = styled.div`
  display: 'flex';
  flex-direction: column;
`;

export const Tags: React.FC = () => {
  const location = useLocation();
  const [text] = useState<any>(location.state);
  const [tags, setTags] = useState<TagAPIResponseType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [wordsToHighlight, setWordsToHighlight] = useState<string[]>([]);

  const api = async (): Promise<void> => {
    setLoading(true);
    const responseTags = await apiCall('https://seo-keyword-suggestion.dev.seo-ml.br-dev.de/predict', text);
    setTags(responseTags);
    setLoading(false);
    setWordsToHighlight(responseTags.map((x: any) => x.tag));
  };

  useEffect(() => {
    api();
    return () => {
      // cleanup;
    };
  });

  return (
    <>
      {!loading && (
        <InterLinkSection>
          <h3>SEO Tags</h3>

          <section>
            <StyledHighlighter>
              <Highlighter highlightStyle={HighlightText} searchWords={wordsToHighlight} autoEscape textToHighlight={text} />
            </StyledHighlighter>
          </section>

          <S.TagsSection>
            {tags.length > 0
              && tags.map(({ tag, trends }) => (
                <S.TagWrapper>
                  <S.TagHeading key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</S.TagHeading>
                  {trends && trends.map(x => (
                    <S.Tags>
                    {x}
                    {' '}
                    </S.Tags>
                    ))}
                </S.TagWrapper>
              ))}
          </S.TagsSection>
        </InterLinkSection>
      )}
      {loading && <img src="./loading.gif" />}
    </>
  );
};
