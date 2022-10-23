import { HeroProjectDynamic } from '../../components/HeroProject/HeroProjectDynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { projects } from '../../components/HeroProject/ProjectList'
import { projects } from '../../components/HeroProject/ProjectListObj'


export default function Project() {
  const router = useRouter()
  // let name  = ''
  let { name } = router.query;
  // console.log(router.query.name)
  // name = name.toString();

  let pname = projects[name as keyof typeof projects]

  // let name = router.query.name as string;

  // let nameStr = ()

  // if (!name) {
  //   name = ''
  // }
    //h ? router.query : '';

  // console.log(typeof name)

  // console.log(name)
  // const pname:string = String(id);
  // console.log(pname)
  // const nameStr: string = JSON.stringify(name)
  // console.log(JSON.stringify(name))
  // const projectArr = { ...projects }
  // console.log(projectArr)
  // console.log(pname)
  // console.log(projects[name])


  // ignoring this error for now but need to resolve
  // NOTE it will break on any unknown route name (eg any non-project names)
  // Need to resolve potentially via SSR


  // looks wild - info here https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string#:~:text=The%20error%20%22No%20index%20signature,keys%20using%20keyof%20typeof%20obj%20.
  
  const project = projects[name as keyof typeof projects];




  // console.log(project)

  // const [projects, setProjects] = useState<any>(null)
  // const [projectsArr, setProjectsArr] = useState<any>(null)

  return (
      // <HeroProjectDynamic {...projects} />
    <HeroProjectDynamic project={name as string} {...project} />
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