import React, {useState, useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from "react-awesome-reveal";

import OvcodeMockup1 from '../assets/work/ovcode/ovcode-1.png';
import OvcodeMockup2 from '../assets/work/ovcode/ovcode-2.png';
import OvcodeMockup3 from '../assets/work/ovcode/ovcode-3.png';
import OvcodeMockup4 from '../assets/work/ovcode/ovcode-4.png';

import IRSMockup1 from '../assets/work/irs-driver/irs-driver-1.png';
import IRSMockup2 from '../assets/work/irs-driver/irs-driver-2.png';
import IRSMockup3 from '../assets/work/irs-driver/irs-driver-3.png';

import AgoraMockup1 from '../assets/work/agora/agora-1.png';
import AgoraMockup2 from '../assets/work/agora/agora-2.png';
import AgoraMockup3 from '../assets/work/agora/agora-3.png';

import PlaystoreIcon from '../assets/playstore.png';

const ProjectImages = ({images, setProgress, setCurrentProject}) => {

    function handleProgress(progress){
        setProgress(progress);
        if(progress >= 0.2 && progress <= 0.8){
            setCurrentProject();
        }
    }

    return(
        <Parallax
            onProgressChange={(progress) => handleProgress(progress)}
            // onEnter={() => setEntered(true)}
            // onExit={() => setEntered(false)}
            // easing={"easeInAndOut"}
        >

            <div class="grid grid-cols-2">

                <div class="flex justify-start">
                    <img style={{height: '90vh'}} src={images[0]} />
                </div>

                <div class="flex justify-end" 
                style={{marginTop: '15vh'}}
                >
                    <img style={{height: '85vh'}} src={images[1]} />
                </div>

                    <div class="flex justify-center" 
                    style={{marginTop: '-20vh'}}
                    >
                        <img style={{height: '65vh'}} src={images[2]} />
                    </div>


                {
                    images[3] &&
                            <div class="flex justify-center" 
                            style={{marginTop: '-10vh'}}
                            >
                                <img style={{height: '65vh'}} src={images[3]} />
                            </div>
                }
            
            </div>

        </Parallax>
    )

}

const ProjectDetails = ({project, number}) => {
    return(
        <div>
            <p class="absolute text-[3.5vh] font-semibold" style={{padding: 60}}>0{number}</p>
            <div class="grid h-screen place-items-center">
                <div class="flex flex-col gap-2" style={{padding: 60, width: '100%'}}>
                    <p class="text-[5.9vw]">{project?.title}</p>
                    <p class="text-[4.0vh]">{project?.roles}</p>
                    <p class="text-[3.0vh]">{project?.description}</p>
                </div>
            </div>
            <div class="absolute bottom-0 left-0" style={{padding: 60}}>
                <div class="flex flex-row gap-2">
                    <p class="text-[3.0vh] font-semibold">{project?.platforms} | </p>
                    <a href={project?.platforms_link?.android} target="_blank" rel="noreferrer">
                        <img style={{cursor: 'pointer', height: '3.2vh', marginTop: '1vh'}} src={PlaystoreIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

const WorkScreen = () => {

    const [progress, setProgress] = useState(0)
    const [current_project, setCurrentProject] = useState(null)
    const [current_project_number, setCurrentProjectNumber] = useState(null)

    var projects = [
        {
            title: "OVCODE",
            roles: "Mobile Developer • UI Designer",
            description: "An app that helps you securely share, verify, and save your trusted files with the help of its patented technology using Blockchain identity, digital twin, permanent storage, and artificial intelligence",
            platforms: "Cross-Platform App • Native Android App",
            images: [ OvcodeMockup1, OvcodeMockup2, OvcodeMockup4, OvcodeMockup3 ],
            platforms_link: {
                android: "https://play.google.com/store/apps/details?id=com.nextix.ovcode"
            }
        },
        {
            title: "IRS Driver",
            roles: "Mobile Developer",
            description: "The driver app of iDeliver Route Services app",
            platforms: "Cross-Platform App",
            images: [ IRSMockup1, IRSMockup2, IRSMockup3 ],
            platforms_link: {
                android: "https://play.google.com/store/apps/details?id=com.irs.irs_driver"
            }
        },
        {
            title: "Agora",
            roles: "Mobile Developer",
            description: "An app of Agora International Ministry for their latest posts and updates in the ministry.",
            platforms: "Cross-Platform App",
            images: [ AgoraMockup2, AgoraMockup1, AgoraMockup3 ],
            platforms_link: {
                android: "https://play.google.com/store/apps/details?id=com.aim.agora_international_minstry"
            }
        },
    ]

    return(

        <>

            <div style={{height: '100vh', width: '100%'}}>
                <div class="grid h-screen place-items-center">
                    <div class="grid place-items-center">
                        <Fade cascade damping={0.75} direction={"up"}>
                            <div>
                                <p class="text-[8.9vw]">Prince Diana</p>
                            </div>
                            <div>
                                <p class="text-[6.0vh]">Software Developer & Full Stack Developer</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div style={{height: '100vh', width: '100%'}}>
                <div class="grid h-screen place-items-center">
                    <div class="grid place-items-center">
                        <p class="text-[6.0vh]">I create mobile, web, and back-end applications</p>
                        <p class="text-[6.0vh]">with serious passion for UI/UX design & new technologies</p>
                    </div>
                </div>
            </div>
        
            <div class="flex flex-row">
                
                <div class="relative">

                    <div class="basis-1/2" style={{position: 'fixed', width: '50%', height: '100vh', top: '0'}}>
                        { progress >= 0.2 && <Fade direction='left'><ProjectDetails number={current_project_number} project={current_project}/></Fade> }
                    </div>

                </div>

                {/* <div class="basis-1/2"/> */}
                <div class="basis-1/2">
                </div>

                <div class="basis-1/2">
                    { projects.map((project, index)=>{
                        return(
                            <div key={project.title}>
                                <ProjectImages images={project.images} setProgress={(progress)=>setProgress(progress)} setCurrentProject={() => {setCurrentProject(projects[index]); setCurrentProjectNumber(index+1)}} />
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        )
                    }) }
                </div>

            </div>
        

        </>
    )
}

export { WorkScreen };