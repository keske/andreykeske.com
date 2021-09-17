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
  top: 0;
  width: 100%;
`;

const ResponsiveFrame: React.FC<Props> = ({
  src,
  title,
}: Props): JSX.Element => (
  <Root allowFullScreen frameBorder="0" src={src} title={title} />
);

export default ResponsiveFrame;
