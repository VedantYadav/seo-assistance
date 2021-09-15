/* eslint-disable camelcase */
import React from 'react';

import styled from '@emotion/styled';

import { LinkAPIResponseType } from '../AppType';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Teaser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const ArticleWrapper = styled.div`
  flex: 1;
  border: 1px solid #f0f0f0;
  margin: 1rem 0;
  padding:0.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Link: React.FC<LinkAPIResponseType> = ({
  link,
  sentence,
  category_link,
  category,
  teaser_image,
  teaser_text,
  title,
}: LinkAPIResponseType) => (
  <>
    <h3>{sentence}</h3>
    <Wrapper>
      <ArticleWrapper>
        <div>
          <img src={teaser_image} alt={teaser_text} width="240" />
        </div>
        <Teaser>
          <div>
            <h3>
              <a href={link} target="_blank" rel="noreferrer">{title}</a>
            </h3>
          </div>
          <br />
          <div>
            <p>{teaser_text}</p>
          </div>
        </Teaser>
        {/* <a key={link} href={link}>
          {sentence}
        </a> */}
      </ArticleWrapper>
      <ArticleWrapper>
        <h4>
            Category:
        </h4>
        <a key={link} href={category_link}>
          {category}
        </a>
      </ArticleWrapper>
    </Wrapper>
    <br />
  </>
);
