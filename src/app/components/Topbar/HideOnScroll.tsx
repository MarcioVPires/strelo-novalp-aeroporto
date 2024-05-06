'use client';

import { Slide, useScrollTrigger } from '@mui/material';

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={true}
      direction="down"
      in={!trigger}
      easing={{
        enter: 'cubic-bezier(0, 1.5, .8, 1)',
        exit: 'linear',
      }}
      timeout={{ enter: 300, exit: 200 }}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </Slide>
  );
}

export default HideOnScroll;
