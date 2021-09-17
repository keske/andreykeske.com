import * as React from 'react';

// Libs
import * as R from 'ramda';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  format?: 'jpeg' | 'png';
  progressive?: 'no' | 'yes';
  quality?: 'lightest' | 'normal';
  src: string;
  // width: number;
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 7,
    overflow: 'hidden',
    width: '100%',
  },
});

const UploadcareImage: React.FC<Props> = ({
  format = 'jpeg',
  progressive = 'no',
  quality = 'normal',
  src,
}: // width,
Props): JSX.Element => (
  <img
    alt="uploadcare"
    className={css(styles.root)}
    src={R.join('', [
      src,
      `-/format/${format}/`,
      `-/progressive/${progressive}/`,
      // `-/resize/${width.toFixed(0)}x/`,
      `-/quality/${quality}/`,
    ])}
  />
);

export default UploadcareImage;
