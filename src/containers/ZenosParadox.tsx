import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

// Components
import { Text } from '../components';
import ZenosParadoxScrollArea from '../Hacks/ZenosParadox.ScrollArea';

const styles = StyleSheet.create({
  title: {
    fontWeight: 800,
    left: 20,
    position: 'fixed',
    top: 20,
  },
});

const ZenosParadox: React.FC = (): JSX.Element => {
  // const [quantity, setQuantity] = React.useState<number>(100);
  // const [size, setSize] = React.useState<number>(10);

  console.log(1);

  return (
    <div>
      <div className={css(styles.title)}>
        <Text>Zeno&apos;s paradoxes, Achilles and the tortoise</Text>
      </div>
      <ZenosParadoxScrollArea />
    </div>
  );
};

export default ZenosParadox;
