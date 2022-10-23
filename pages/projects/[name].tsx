import { HeroProjectDynamic } from '../../components/HeroProject/HeroProjectDynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { projects } from '../../components/HeroProject/ProjectList'
import { projects } from '../../components/HeroProject/ProjectListObj'


export default function Project() {
  const router = useRouter()
  const { name } = router.query;


  console.log(name)
  const pname = String(name);
  console.log(pname)
  // const nameStr: string = JSON.stringify(name)
  // console.log(JSON.stringify(name))
  // const projectArr = { ...projects }
  // console.log(projectArr)
  // console.log(pname)
  // console.log(projects[name])


  // ignoring this error for now but need to resolve
  // NOTE it will break on any unknown route name (eg any non-project names)
  // Need to resolve potentially via SSR
  const project = projects[name];




  // console.log(project)

  // const [projects, setProjects] = useState<any>(null)
  // const [projectsArr, setProjectsArr] = useState<any>(null)

  return (
      // <HeroProjectDynamic {...projects} />
    <HeroProjectDynamic project={name} {...project} />
  )
}

interface projectName {
  pname: string;
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
}



// <div>
//     {/* <h1>Project Page</h1> */}
//     {projects ?
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