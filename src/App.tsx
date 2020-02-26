import * as React from 'react';
import Container from './components/Container';
import Logo from './icons/logo.svg'

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Logo width="50" height="52" />
      <Container />
    </div>
  );
};
