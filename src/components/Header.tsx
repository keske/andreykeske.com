import React from 'react';

interface Props {
  label?: string;
}

const Header: React.FC<Props> = ({
  label = 'Site',
}: Props): JSX.Element => (
  <header>
    <p>{label}</p>
  </header>
);

export default Header;
