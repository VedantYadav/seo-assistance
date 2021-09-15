/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useHistory } from 'react-router';

import { TextArea } from 'component/TextArea';

import * as S from './AppStyle';
import { useLocalStorage } from './component/hook/useLocalStorage.jsx';

export const App: React.FC = () => {
  const [text, setText] = useLocalStorage('seoText', localStorage.getItem('seoText') || null);
  const history = useHistory();

  const fetchInterlinkedArticles = async (): Promise<void> => {
    history.push({
      pathname: '/interlink',
      state: text,
    });
  };

  const fetchTags = async (): Promise<void> => {
    history.push({
      pathname: '/tags',
      state: text,
    });
  };

  return (
    <>
      <div>
        <S.AppContainer>
          <h3>SEO Assistance</h3>

          <section>
            <TextArea fetchInterlinkedArticles={fetchInterlinkedArticles} fetchTags={fetchTags} text={text} setText={setText} />
          </section>
        </S.AppContainer>
      </div>
    </>
  );
};
