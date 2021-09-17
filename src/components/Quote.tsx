import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  link?: string;
};

const Root = styled.p`
  background-color: lemonchiffon;
  border-radius: 10;
  color: #000;
  padding: 20px;
`;

const Quote: React.FC<Props> = ({
  children,
  link,
}: Props): JSX.Element => (
  <Root>
    {children}
    {link && (
      <sup>
        <a href="https://en.wikipedia.org/wiki/Zeno's_paradoxes#Achilles_and_the_tortoise">
          Source
        </a>
      </sup>
    )}
  </Root>
);

export default Quote;
