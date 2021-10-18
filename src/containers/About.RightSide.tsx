/* eslint max-lines: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */

import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';

// Components
import { Spacer, Text, Title } from '../components';
import { mediaQuery } from '../utils';

const { PUBLIC_URL } = process.env;

const Image = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  display: inline-block;
  height: 17px;
  margin-right: 3px;
  min-width: 17px;
  transform: translate(0px, -7px);
`;

const Flag = styled(Image)<{ url: string }>`
  background-size: contain;
  height: 13px;
  min-width: 27px;
  transform: translate(7px, -7px);
`;

const NYFlag = styled(Flag)<{ url: string }>`
  background-size: cover;
  width: 27px;
`;

const Airbnb = styled.span`
  color: #ff585d;
`;

const Italic = styled(Text)`
  display: inline;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  font-style: italic;
  opacity: 0.7;

  ${mediaQuery(
    'phone',
    css`
      font-size: 20px;
    `,
  )}
`;

const Link = styled.a`
  border: 1px solid #000;
  border-radius: 7px;
  color: #000;
  display: inline-block;
  margin-right: 5px;
  padding: 3px 7px;

  &:hover {
    border: 1px solid blue;
  }

  ${mediaQuery(
    'phone',
    css`
      font-size: 14px;
      padding: 0px 7px;
    `,
  )}
`;

const Root = styled.div`
  position: absolute;
  width: 100%;
  z-index: 21;
`;

const StyledTitle = styled(Title)`
  font-size: 64px;
  pointer-events: none;
  text-transform: uppercase;

  ${mediaQuery(
    'phone',
    css`
      font-size: 32px;
    `,
  )}
`;

const StyledText = styled(Text)`
  font-size: 20px;
  padding-right: 70px;

  ${mediaQuery(
    'phone',
    css`
      font-size: 16px;
      line-height: 34px;
    `,
  )}
`;

const Sup = styled.sup`
  font-weight: normal;
  margin-left: 4px;
`;

const W1D1 = styled.span`
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(90deg, #40e417, #ff0095, #3f497a);
  background-repeat: repeat;
  background-size: 100%;
`;

const AboutRightSide: React.FC = (): JSX.Element => (
  <Root>
    <StyledTitle>Andrey Keske</StyledTitle>
    <StyledText>
      <Italic>is a</Italic> digital artist<Italic>/</Italic>creative
      programmer, <Italic>and a</Italic> full-stack developer{' '}
      <Image url={`${PUBLIC_URL}/static/about/ts.png`} />
      <Image url={`${PUBLIC_URL}/static/about/react.png`} />
      <Image url={`${PUBLIC_URL}/static/about/node.jpeg`} />
    </StyledText>
    <StyledText>
      Andrey <Italic>works with companies like</Italic>{' '}
      <strong>
        <Link href="https://samara.com/">
          {' '}
          Samara <Airbnb>Airbnb</Airbnb>
          <Sup>↗</Sup>
        </Link>
      </strong>{' '}
      <Italic>and</Italic>{' '}
      <strong>
        <Link href="https://jupe.com/">
          Jupe<Sup>↗</Sup>
        </Link>
      </strong>
      <Italic>, in 2020 launched a successful startup</Italic>{' '}
      <strong>
        <Link href="https://apps.apple.com/us/app/w1d1/id1497155726">
          <W1D1>W1D1</W1D1>
          <Sup>↗</Sup>
        </Link>
      </strong>
    </StyledText>
    <StyledText>
      Andrey <Italic>splits his life between two cities</Italic> New
      York City
      <Italic>, NY</Italic>
      <NYFlag url={`${PUBLIC_URL}/static/about/ny.jpg`} />, and Miami,{' '}
      <Italic>Fl</Italic>
      <Flag url={`${PUBLIC_URL}/static/about/florida.jpg`} />{' '}
      <Italic>where he lives</Italic>
    </StyledText>
    <Spacer size={4} />
    <Text>
      <Link href="mailto://hello@andreykeske.com">Mail</Link>
      <Link href="https://github.com/keske">GH</Link>
      <Link href="https://www.instagram.com/andreykeske/">IG</Link>
      <Link href="https://www.linkedin.com/in/andreykeske/">LN</Link>
      <Link href="https://www.youtube.com/user/andreykeske">YT</Link>
    </Text>
  </Root>
);

export default AboutRightSide;
