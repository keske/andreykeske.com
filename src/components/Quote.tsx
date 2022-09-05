import * as React from "react";

// Libs
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  inverted?: boolean;
  link?: string;
};

const Root = styled.p<{ inverted: boolean }>`
  border-left: ${(props) =>
    props.inverted
      ? "1px solid rgba(255, 255, 255, 0.2);"
      : "1px solid rgba(0, 0, 0, 0.5);"};
  font-style: italic;
  margin: 13px 0;
  padding: 0 0 0 13px;
`;

const Quote: React.FC<Props> = ({
  children,
  inverted = false,
  link,
}: Props): JSX.Element => (
  <Root {...{ inverted }}>
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
