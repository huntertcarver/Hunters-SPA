import { useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function About () {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0', zIndex: -1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </div>
    
  );
}

export default About;