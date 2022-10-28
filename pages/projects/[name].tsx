import { HeroProjectDynamic } from '../../components/HeroProject/HeroProjectDynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { projects } from '../../components/HeroProject/ProjectList'
import { projects } from '../../components/HeroProject/ProjectListObj'


export default function Project() {
  const router = useRouter()
  let { name } = router.query;

  // looks wild - info here https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string#:~:text=The%20error%20%22No%20index%20signature,keys%20using%20keyof%20typeof%20obj%20.
  
  // Select project based in projects object based on name of project page visited
  const project = projects[name as keyof typeof projects];


  // Return the relevant project page from the object
  return (
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