import React from 'react';
import addIcon from '../icons/plus-square.svg';

const AddTask = ({setAddTask}) => {
    
    return (
        <div>
            <button
                type="button"
                className="btn btn-sm"
                onClick={() => setAddTask(true)}
            >
                <img
                    src={addIcon}
                    alt="Plus Icon"
                />
            </button>
            <label className="pt-1">Type to add new task</label>
        </div>
    );
}

export default AddTask;