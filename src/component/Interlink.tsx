/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import Highlighter from 'react-highlight-words';
import { useLocation } from 'react-router-dom';

import { LinkAPIResponseType } from '../AppType';
import { Link } from './Link';
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

export const Interlink: React.FC = () => {
  const location = useLocation();
  const [text] = useState<any>(location.state);
  const [link, setLinks] = useState<LinkAPIResponseType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [wordsToHighlight, setWordsToHighlight] = useState<string[]>([]);

  const api = async (): Promise<void> => {
    setLoading(true);
    const responseLink = await apiCall('https://seo-pages-interlinking.dev.seo-interlinking.br-dev.de/predict', text);
    setLinks(responseLink);
    setLoading(false);
    setWordsToHighlight(responseLink.map((x: any) => x.sentence));
  };

  useEffect(() => {
    api();
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <>
      {!loading && (
        <InterLinkSection>
          <h3>SEO Interlink</h3>

          <section>
            <StyledHighlighter>
              <Highlighter highlightStyle={HighlightText} searchWords={wordsToHighlight} autoEscape textToHighlight={text} />
            </StyledHighlighter>
          </section>
          <div>{link && link.length > 0 && link.map(k => <Link {...k} />)}</div>
        </InterLinkSection>
      )}
      {loading && <img src="./loading.gif" />}
    </>
  );
};
