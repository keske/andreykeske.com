/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';

// Libs
import * as R from 'ramda';
import { StyleSheet, css } from 'aphrodite';
import { useWheel } from 'react-use-gesture';

// Hooks
import { useWindowSize } from '../hooks';

// Components
import { Text } from '../components';

type Props = {
  screens?: number;
};

const styles = StyleSheet.create({
  text: {
    left: 20,
    position: 'fixed',
    top: 50,
  },
});

const ZenosParadoxScrollArea: React.FC<Props> = ({
  screens = 10,
}): JSX.Element => {
  const { height, width } = useWindowSize();

  const [totalScreens, setTotalScreens] = React.useState<number>(
    screens,
  );

  const bind = useWheel(({ xy: [, y] }) => {
    if (y > totalScreens * height - 10) {
      setTotalScreens(totalScreens + 1);
    }
  });

  const renderPhrase = (index: number): string =>
    index === 0 ? 'Half of' : ', half of';

  return (
    <div
      {...bind()}
      style={{
        height: height * totalScreens + 13,
        width,
      }}
    >
      <div className={css(styles.text)}>
        {totalScreens === screens ? (
          <Text>Start scrolling</Text>
        ) : (
          <Text
            style={{
              fontSize: `${1 - totalScreens * 0.001}rem`,
              lineHeight: '1.3rem',
              paddingRight: 20,
              paddingTop: 20,
            }}
          >
            {R.range(0, totalScreens - screens).map((key) => (
              <span key={key}>{renderPhrase(key)}</span>
            ))}{' '}
            way
          </Text>
        )}
      </div>
    </div>
  );
};

export default ZenosParadoxScrollArea;
