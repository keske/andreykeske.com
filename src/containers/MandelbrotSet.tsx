/* eslint jsx-a11y/label-has-associated-control: 0 */

import * as React from 'react';

// Libs
import styled from 'styled-components';

// Components
import MandelbrotSetGeometry from '../Hacks/MandelbrotSet.Geometry';

const Form = styled.span`
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-top: 10px;
  padding: 20px;
  position: fixed;
  z-index: 3;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;

const Root = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  z-index: 1;
`;

const MandelbrotSet: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = React.useState<number>(100);

  const [size, setSize] = React.useState<number>(10);

  return (
    <Root>
      <Wrapper>
        <MandelbrotSetGeometry quantity={quantity} size={size} />
      </Wrapper>
      <Form>
        <label htmlFor="quantity">
          Quantity
          <Input
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
          <Input
            id="size"
            onChange={(event) => {
              setSize(+event.target.value);
            }}
            type="number"
            value={size}
          />
        </label>
      </Form>
    </Root>
  );
};

export default MandelbrotSet;
