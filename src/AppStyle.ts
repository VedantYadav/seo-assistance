import styled from '@emotion/styled';

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const TagHeading = styled.h3`
  color: black;
`;

export const TagsSection = styled.div`
  display: 'flex';
  flex-direction: column;
`;

export const Tags = styled.span`
  color: #1990ff;
`;

export const HighlightText = {
  backgroundColor: '#ffff00',
};

export const Highlighter = styled.div`
  margin: 2rem 0;
  height: 306px;
  overflow: scroll;
  padding: 1rem;
  border: 1px solid #f0f0f0;

  span {
    white-space: pre-wrap;
  }
`;

export const TagWrapper = styled.div`
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #f0f0f0;
`;
