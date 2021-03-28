/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';

// Libs
import * as R from 'ramda';
import { animated, useSpring } from 'react-spring';
import { StyleSheet, css } from 'aphrodite';
import { useWheel } from 'react-use-gesture';

// Hooks
import { useWindowSize } from '../hooks';

// Components
import { Text } from '../components';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#999',
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    width: 10,
  },
  text: {
    left: 20,
    position: 'fixed',
    top: 50,
  },
});

const ZenosParadoxScrollArea: React.FC = (): JSX.Element => {
  const [index, setIndex] = React.useState<number>(1);

  const { height, width } = useWindowSize();

  const [pos, ref] = useSpring(() => ({ y: 0 }));

  const bind = useWheel(({ xy: [, y] }) => {
    console.log('y', y);
    console.log('height / (index + 1)', height / (index + 1));
    if (y - height / (index + 1) > height / (index + 1)) {
      setIndex(index + 1);
    }

    ref.current[0].set({ y });
  });

  const renderPhrase = (): string =>
    index === 1 ? 'Half of' : ', half of';

  return (
    <div {...bind()} style={{ height, width }}>
      <div className={css(styles.text)}>
        {index === 1 ? (
          <Text>Start scrolling</Text>
        ) : (
          <Text
            style={{
              paddingRight: 20,
              paddingTop: 20,
            }}
          >
            {R.range(0, index).map((key) => (
              <span key={key}>{renderPhrase()}</span>
            ))}{' '}
            way
          </Text>
        )}
      </div>
      <animated.div
        className={css(styles.scroll)}
        style={{ height: height / (index + 1), y: pos.y }}
      />
    </div>
  );
};

export default ZenosParadoxScrollArea;
