import { Badge, Button, createStyles, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Typewriter from 'typewriter-effect';
import { openContextModal } from '@mantine/modals';

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 18,
    },
  },
  skill: {
    [theme.fn.smallerThan('md')]: {
      widows: 10,
    },
  }
}));

function Home () {
  const { colorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  var skills = ["React", ".NET", "MAUI", "ASP.NET MVC", "C", "C++", "C#", "Python", "JavaScript", "CSS", "HTML", "JSX", "Razor"
  , "SQL", "Git", "GitHub", "GitLabs", "Azure", "Docker", "Linux", "Visual Studio", "Visual Studio Code", "Xamarin", "Xamarin.Forms",
  "JSON", "XML", "Winforms", "Jest", "Unit Testing", "Bootstrap", "Material UI", "Mantine", "React Spring", "React Router",
  "MUI", "MATLAB", "Version Control", "Java", "JQuery", "AJAX", "REST", "Entity Framework", "Entity Framework Core", "Stored Procedures",
  "Package Managers", "NPM", "Yarn", "NuGet", "Datatables", "CLI", "NodeJS", "Mantine", "TypeScript", "Postman", "APIS", "Web APIs"];
  var badges: JSX.Element[] = [];
  let text = [`Hey I'm Hunter!`, `I'm a Full Stack Software Engineer.`];

  skills.forEach((skill) => {
    let randomTop = getRandomNumber(0, winHeight);
    let randomLeft = getRandomNumber(0, winWidth);
    let speed = Math.random() + 1;
    let offset;
    speed > 1.5 ? offset = 0.75 : offset = 0;

    badges.push(
      <ParallaxLayer
      offset={offset}
      speed={speed}
      style={{
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      top: randomTop + "px", left: randomLeft + "px", width: 1, height: 1, zIndex: speed*100}}>
        <Button compact size='xs' onClick={() =>
          openContextModal({
            modal: 'demonstration',
            title: skill,
            innerProps: {
              modalBody:
                'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
            },
          })
        } variant="outline">
          <Badge>{skill}</Badge>
        </Button>
      </ParallaxLayer>
    )
  });

  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0', zIndex: -1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Title className={classes.title}
            variant="gradient"
            gradient={{ from: colorScheme === 'dark' ? 'lightblue' : 'blue', to: colorScheme === 'dark' ? 'white' : 'black' }}>
              <Typewriter
                options={{
                  strings: [text[0], text[1]],
                  deleteSpeed: 50,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Title>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background }} />

        {badges}

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

export default Home;

function getRandomNumber(min: number, max: number) {
    
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  //To make sure the skills are not too close to the edge of the screen
  if(pos > max)
    getRandomNumber(min, max);
  else if(pos < min)
    getRandomNumber(min, max);
  //To make sure the skills are not too close to the the typewriter text
  else if(pos < (max/2) + 50 && pos > (max/2) - 50)
    getRandomNumber(min, max);
  else
    return pos;

}