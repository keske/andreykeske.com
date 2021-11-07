import * as React from 'react';

// Libs
import Switch from 'react-ios-switch';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

const Root = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  height: 70px;
  padding-left: 60px;
  width: 200px;

  &:active {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  }
`;

const StyledSwitch = styled(Switch)`
  position: absolute;
  transform: translate(-170px, 10px);
`;

const SwitchInButton: React.FC = (): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <ProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ offset: 2, span: 7 }}>
            <Title>Switch In Button</Title>
            <Text>
              Experimental button component with
              <Mark>Switch</Mark>
              inside it that disable or enable that button. This
              button can be used in forms when you have to confirm or
              agree with the license, for example.
            </Text>

            <Spacer size={2} />

            <Root
              disabled={!checked}
              onClick={() => {
                alert('Clicked!');
              }}
              style={{
                color: checked ? '#000' : '#999',
              }}
              type="button"
            >
              Confirm
            </Root>

            <StyledSwitch
              checked={checked}
              onChange={(value) => {
                setChecked(value);
              }}
            />

            <Spacer size={8} />

            <ProjectTopics topics={['UI']} />
            <ProjectYear>2021</ProjectYear>
          </Col>
        </Row>
      </Container>
    </ProjectWrapper>
  );
};

export default SwitchInButton;
