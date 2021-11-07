import * as React from 'react';

// Libs
import * as R from 'ramda';
import styled from 'styled-components';

type Props = {
  format?: 'jpeg' | 'png';
  progressive?: 'no' | 'yes';
  quality?: 'lightest' | 'normal';
  src: string;
};

const Root = styled.img`
  border-radius: 21px;
  overflow: hidden;
  width: 100%;
`;

const UploadcareImage: React.FC<Props> = ({
  format = 'jpeg',
  progressive = 'no',
  quality = 'normal',
  src,
}: Props): JSX.Element => (
  <Root
    alt="uploadcare"
    src={R.join('', [
      src,
      `-/format/${format}/`,
      `-/progressive/${progressive}/`,
      `-/quality/${quality}/`,
    ])}
  />
);

export default UploadcareImage;
