import { useState, useEffect } from 'react';
import AddTask from './addTask';
import FullTask from './fullTask';
import ListItem from './listItem';
import ClienteAxios from '../config/axios';

const TasksList = () => {

    const tasks = [
        {_id: 1, text: 'Esta es mi primera tarea'},
        {_id: 1, text: 'Esta es mi segunda tarea'},
    ];

    const [ tasksList, setTasksList ] = useState([]); 
    const [ addTask, setAddTask ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ cancelbutton, setCancelButton ] = useState(false);
    const [ addbutton, setAddButton ] = useState(false);
    const [ isedit, setIsEdit ] = useState(false);

	useEffect(() => {
		const getTasksList = async () => {
			try {
				// const resultado = await ClienteAxios.get('/tasks');

				// setTasksList(resultado.data);

                setTasksList(tasks);
                
                setLoading(false);
			}
			catch(error) {
                console.log(error.response);
			}
		};
		getTasksList();

        // eslint-disable-next-line
	}, [])

    return ( 
        <div className="container mt-3">

			{addTask ?
				<FullTask 
                    isedit={isedit}
                    setCancelButton={setCancelButton}
                    setAddButton={setAddButton}
                />
				:
				<AddTask
					setAddTask={setAddTask}
                    setIsEdit={setIsEdit}
				/>
			}

            { loading ? 
                <p>Cargando...</p> 
                :
                tasksList.map(task => (
                    <ListItem
                        key= {task._id}
                        text={task.text}
                    />
                ))
            }
		</div>
     );
}
 
export default TasksList;