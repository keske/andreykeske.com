import * as React from 'react';
import { useIntersectionObserverRef } from 'rooks';

type Props = {
  children: React.ReactNode;
};

const OnScreen: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState(false);

  const callback = (entries: Array<{ isIntersecting: boolean }>) => {
    if (entries && entries[0]) {
      setIsVisible(entries[0].isIntersecting);
    }
  };

  const verticalMargin = window.innerHeight * 2;

  const [ref] = useIntersectionObserverRef(callback, {
    rootMargin: `${verticalMargin}px 0px ${verticalMargin}px 0px`,
  });

  return (
    <div ref={ref} {...rest}>
      {isVisible && children}
    </div>
  );
};

export default OnScreen;
