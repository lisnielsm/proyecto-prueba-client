import { useState, useEffect } from 'react';
import AddTask from './addTask';
import FullTask from './fullTask';
import ClienteAxios from '../config/axios';

const TasksList = () => {

    const tasks = [
        {_id: 1, text: 'Esta es mi primera tarea'},
        {_id: 2, text: 'Esta es mi segunda tarea'},
        {_id: 3, text: 'Esta es mi tercera tarea'},
        {_id: 4, text: 'Esta es mi cuarta tarea'}
    ];

    const [ tasksList, setTasksList ] = useState([]); 
    const [addTask, setAddTask] = useState(false);
    const [loading, setLoading] = useState(true);

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
	}, [])

    return ( 
        <div className="container mt-3">

			{addTask ?
				<FullTask />
				:
				<AddTask
					setAddTask={setAddTask}
				/>
			}

            { loading ? 
                <p>Cargando...</p> 
                :
                tasksList.map(task => (
                    <FullTask
                        key= {task._id}
                    />
                ))
            }
		</div>
     );
}
 
export default TasksList;