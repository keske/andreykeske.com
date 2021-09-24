import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  link?: string;
};

const Root = styled.p`
  border: 1px solid #000;
  border-radius: 10px;
  font-weight: bold;
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
