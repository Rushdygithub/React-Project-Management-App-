
import SlideBar from "./componants/SlideBar";
import NewProject from "./componants/NewProject";
import NoProjectSelected from "./componants/NoProjectSelected";
import React from 'react'

function App() {

  const [projectState,setProjectState] = React.useState({
    selectedProjetct: undefined,
    projects: []
  });

  console.log(projectState,"========")


  function handleProjectState() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjetct: null
      }
    });
  }

  function handleClose() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjetct: undefined
      }
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjetct: undefined
      }
    });
  }

  function handleAddProject(project) {
  
    setProjectState((prev) => {

      const newProject = {
        ...project,
        id: Math.random()
      }

      
      return {
        ...prev,
        projects: [...prev.projects, newProject ]
      }
    })
  }

  // function handleTabButton(id,status) {
  //   console.log("Excuted",id,status,"===========")
  //   setProjectState((prev)=> {
  //     return {
  //       ...prev,
  //       selectedProjetct: status
  //     }
  //   })
  // }

  

  let content; 

  if(projectState.selectedProjetct === null) {
    content = <NewProject addProject={handleAddProject} close={handleClose} cancel={handleCancel}/>
  } else if (projectState.selectedProjetct === undefined) {
    content = <NoProjectSelected onStartAddProject={handleProjectState} />
  }
  return (
    <div className="h-screen flex">
      <SlideBar onStartAddProject={handleProjectState} allProject={projectState}  />
      {content}
    </div>
  );
}

export default App;
