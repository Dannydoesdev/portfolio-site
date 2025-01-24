import Link from 'next/link'
import { useRouter } from 'next/router'
import { createStyles, Overlay, Container, Title, Avatar, Switch, Card, Image, Text, SimpleGrid, Badge, Button, Group, Space, Center, Stack } from '@mantine/core';
import useStyles from './HeroProject.styles';
// import { projects } from './ProjectList'


export function HeroProjectDynamic({ image, title, description, type, githubLink, typeStyle, internalLink, link, project }:projectProps) {
  const { classes } = useStyles({ project });
  // const props:any = projects;

  return (
    <div className={classes.hero}>
      <Group sx={{backgroundImage: `url(/img/heroproject/${title}.jpg)`}}></Group>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {description}
        </Text>
        <Link href={link} target='_blank' passHref>
          <Button
            size='xl'
            radius='xl'
            className={classes.control}
            sx={(theme) => ({
              // subscribe to color scheme changes
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.violet[6],
            })}
          >Check it out!</Button>
        </Link>
      </Container>
    </div>
  );
}

interface projectProps {
  image: string;
  title: string;
  link: string;
  githubLink: string;
  internalLink: string;
  type: string;
  typeStyle: boolean; // boolean to apply the 'team' style vs 'solo' style to label
  description: string;
  project: string;
}

// Copied from GitConnect below:

// export default function Project() {
//   const router = useRouter()
//   console.log(router.query)
//   const { id } = router.query
//   console.log(id)
//   // const { userData } = useContext(AuthContext)
//   console.log('projects in profiles')
//   // console.log(projects)
//   // const router = useRouter()
//   // console.log(router.query)

//   const [projects, setProjects] = useState<any>(null)
//   const [projectsArr, setProjectsArr] = useState<any>(null)

//   useEffect(() => {

//     // console.log(userData.userName)
//     // userName = userData.userName
//     // const fetcher = (url: string) => axios.get(url).then(res => res.data)
//     // const { data, error } = useSWR(`/api/projects/all`, fetcher)
//     // const userName = userData.userName
//     // const userId = userData.userId
//     // console.log(userName)


//     const URL = `/api/profiles/projects/${id}`;
//     axios.get(URL)
//       .then((response) => {
//         console.log(response.data)
//         setProjects(response.data)
//       })

//   }, [])

//   console.log('projectsss')
//   console.log(projects)

//   // const fetcher = (url: string) => axios.get(url).then(res => res.data)
//   // const { data, error } = useSWR(`/api/projects/all`, fetcher)


//   // layout


//   // console.log('one project')
//   // console.log(project)
//   // const projectData = project[0].docData

//   return (
//     <div>
//       <HeroContentLeft props={projects} />
//       {/* <h1>Project Page</h1> */}
//       {projects ?
//         projects.map((project: any) => {
//           return (
//             < div key={project.id} >
//               {/* <h2>{project.name}</h2>
//       <Link href={`/profiles/projects/${project.id}`} passHref><Text component='a' className='dark:text-white' size='md' weight="bolder">Check it out!</Text></Link> */}
//               {/* <p>{project}</p> */}
//               {/* <h3>test</h3> */}
//             </div>
//           )
//         }) :
//         <h2>loading</h2>
//       }
//     </div>
//   )
// }
// //  {/* <h1>{projectData.userName}</h1>
// //       <p>{projectData.userEmail}</p>  */}