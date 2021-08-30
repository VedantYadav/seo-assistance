/* eslint-disable camelcase */
import React from 'react';

import styled from '@emotion/styled';

import { LinkAPIResponseType } from '../AppType';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArticleWrapper = styled.div`
   flex: 1;
   padding: 1rem;
   border: 1px solid #f0f0f0;
   margin: 1rem 0;
   margin-right: 1rem;
`;

export const Link: React.FC<LinkAPIResponseType> = ({
 link, sentence, category_link, category,
}: LinkAPIResponseType) => (
  <>
    <h3>{sentence}</h3>
    <Wrapper>

      <ArticleWrapper>
        <h4>Article:</h4>
        <a key={link} href={link}>
          {sentence}
        </a>
      </ArticleWrapper>
      <ArticleWrapper>
        <h4> Category: </h4>
        <a key={link} href={category_link}>
          {category}
        </a>
      </ArticleWrapper>
    </Wrapper>
    <br />
  </>
);
