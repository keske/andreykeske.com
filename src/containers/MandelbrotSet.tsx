import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

// Components
import { Title } from '../components';
import MandelbrotSetGeometry from '../Hacks/MandelbrotSet.Geometry';

const styles = StyleSheet.create({
  form: {
    borderRadius: 30,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    marginTop: 10,
    padding: 30,
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
  },
  root: {
    padding: 20,
  },
  wrapper: {
    position: 'absolute',
    top: 300,
  },
});

const MandelbrotSet: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = React.useState<number>(100);

  const [size, setSize] = React.useState<number>(10);

  return (
    <div className={css(styles.root)}>
      <Title>Mandelbrot Set</Title>
      <span className={css(styles.form)}>
        <label htmlFor="quantity">
          Quantity
          <input
            className={css(styles.input)}
            id="quantity"
            onChange={(event) => {
              setQuantity(+event.target.value);
            }}
            type="number"
            value={quantity}
          />
        </label>
        <label htmlFor="size">
          Size
          <input
            className={css(styles.input)}
            id="size"
            onChange={(event) => {
              setSize(+event.target.value);
            }}
            type="number"
            value={size}
          />
        </label>
      </span>
      <div className={css(styles.wrapper)}>
        <MandelbrotSetGeometry quantity={quantity} size={size} />
      </div>
    </div>
  );
};

export default MandelbrotSet;
