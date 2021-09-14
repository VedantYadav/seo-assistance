import React from 'react';

import styled from '@emotion/styled';

import { TextAreaProps } from 'AppType';

const Button = styled.button`
  padding: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  border: 1px solid #f0f0f0;
`;

const AnalyseTextBtn = styled(Button)`
  background-color: #000;
  margin-left: 1rem;
`;

const InterlinkedArticlesBtn = styled(Button)`
  background-color: #000;
`;

const TextAreaInput = styled.textarea`
  border: 1px solid #f0f0f0;
  margin: 1rem 0;
  outline: none;
  width: 100%;
`;

export const TextArea: React.FC<TextAreaProps> = ({
 fetchInterlinkedArticles, fetchTags, text, setText,
}) => (
  <>
    <div>
      <TextAreaInput
        id="w3review"
        name="w3review"
        rows={20}
        placeholder="Type Article Text Here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
    <div>
      <InterlinkedArticlesBtn onClick={fetchInterlinkedArticles}>Check Interlinked Articles</InterlinkedArticlesBtn>
      <AnalyseTextBtn onClick={fetchTags}>Analyse Text</AnalyseTextBtn>
    </div>
  </>
);
