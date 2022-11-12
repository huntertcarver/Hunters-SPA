import { Badge, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function About () {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  var skills = ["React", ".NET", "MAUI", "ASP.NET MVC", "C", "C++", "C#", "Python", "JavaScript", "CSS", "HTML", "JSX", "Razor"
  , "SQL", "Git", "GitHub", "GitLabs", "Azure", "Docker", "Linux", "Visual Studio", "Visual Studio Code", "Xamarin", "Xamarin.Forms",
  "JSON", "XML", "Winforms", "Jest", "Unit Testing", "Bootstrap", "Material UI", "Mantine", "React Spring", "React Router",
  "MUI", "MATLAB", "Version Control", "Java", "JQuery", "AJAX", "REST", "Entity Framework", "Entity Framework Core", "Stored Procedures",
  "Package Managers", "NPM", "Yarn", "NuGet", "Datatables", "CLI", "NodeJS", "Mantine", "TypeScript", "Postman", "APIS", "Web APIs"];
  var badges: JSX.Element[] = [];

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
        top: randomTop + "px", left: randomLeft + "px"}}>
        <Badge>{skill}</Badge>
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
          <p>Scroll down</p>
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

export default About;

function getRandomNumber(min: number, max: number) {
    
  var pos = Math.floor(Math.random() * (max - min + 1)) + min;
  if(pos > max - 100)
    getRandomNumber(min, max);
  else if(pos < min + 100)
    getRandomNumber(min, max);
  else
    return pos;

}