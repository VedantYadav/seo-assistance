/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';

import styled from '@emotion/styled';

import { LinkAPIResponseType } from '../AppType';
import { Link } from './Link';

type Props = {
  link: LinkAPIResponseType[];
  text: string;
}

export const InterLinkSection = styled.div`
  display: 'flex';
  flex-direction: column;
`;

export const Interlink: React.FC<Props> = (props: Props) => (
    <>
        <InterLinkSection>
          {/* <p>{props.text}</p> */}
          <div>
          {props.link.length > 0
            && props.link.map((k) => <Link {...k} />)}
          </div>
        </InterLinkSection>
    </>
);
