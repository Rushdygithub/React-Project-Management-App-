
import SlideBar from "./componants/SlideBar";
import NewProject from "./componants/NewProject";
import NoProjectSelected from "./componants/NoProjectSelected";
import React from 'react'
import Display from "./componants/Display";

function App() {

  const [projectState,setProjectState] = React.useState({
    selectedProjetct: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(task) {

    const taskId = Math.random();
    

    setProjectState((prev) => {
      const taskObj = {
        projectId: prev.selectedProjetct,
        taskId: taskId,
        task: task
     }
      return {
        ...prev,
        tasks: [...prev.tasks, taskObj ]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState(prev => {
      return { 
       ...prev,
       tasks: projectState.tasks.filter(item => item.id !== id)
      }
    })  
  }

  console.log(projectState,"app")
  // console.log(projectState.selectedProjetct)

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
        title: project.title,
        date: project.enteredDate,
        description: project.enteredDesc,
        id: Math.random()
      }

      return {
        ...prev,
        projects: [...prev.projects, newProject ]
      }
    })
  }

  
  function handleSelectProject(id) {
    console.log("Excuted",id,"===========")
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjetct: id
      }
    });
    
  }

  const selectedId = projectState.projects.find(project => project.id === projectState.selectedProjetct)
  
  //Delete from a array method using filter
  function handleDelete() {
     setProjectState(prev => {
       return { 
        ...prev,
        selectedProjetct: undefined,
        projects: projectState.projects.filter(item => item.id !== prev.selectedProjetct)
       }
     })  
  }

  // console.log(selectedId)


  let content = <Display tasks={projectState.tasks}  info={selectedId} deleteItem={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>; 

  if(projectState.selectedProjetct === null) {
    content = <NewProject addProject={handleAddProject} close={handleClose} cancel={handleCancel}/>
  } else if (projectState.selectedProjetct === undefined) {
    content = <NoProjectSelected onStartAddProject={handleProjectState} />
  }
  return (
    <div className="h-screen flex">
      <SlideBar onStartAddProject={handleProjectState} allProject={projectState} onSelect={handleSelectProject} />
      {content}
    </div>
  );
}

export default App;
