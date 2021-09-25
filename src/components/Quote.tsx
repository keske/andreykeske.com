import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  link?: string;
};

const Root = styled.p`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  font-style: italic;
  padding: 13px;
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
