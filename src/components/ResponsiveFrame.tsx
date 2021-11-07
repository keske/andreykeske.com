import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  src: string;
  title: string;
};

const Root = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  border-radius: 21px;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
`;

const ResponsiveFrame: React.FC<Props> = ({
  src,
  title,
}: Props): JSX.Element => (
  <Wrapper>
    <Root allowFullScreen frameBorder="0" src={src} title={title} />
  </Wrapper>
);

export default ResponsiveFrame;
