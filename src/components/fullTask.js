import React from 'react';
import addIcon from '../icons/plus-square.svg';
import avatar from '../icons/Lisniel Sanchez.jpg';
import maximize from "../icons/maximize-2.svg";
import calendar from "../icons/calendar.svg";
import unlock from "../icons/unlock.svg";
import sun from "../icons/sun.svg";
import disc from "../icons/disc.svg";

const FullTask = () => {

    const [disablecomponents, setDisableComponents] = useState(true);

    const onTextChange = e => {
        if(e.target.value === '') {
            setDisableComponents(true);
        } else {
            setDisableComponents(false);
        }
    }

    return (
        <div style={{ margin: '10px', boxShadow: '4px 4px 6px #E5E8E8, -4px 4px 6px #E5E8E8' }}>
            <div className="flex-row" style={{ border: '1px solid #E5E8E8' }}>
                <div style={{ paddingTop: '.375rem', paddingLeft: '.775rem' }}>
                    <img src={addIcon} alt="Plus Icon" />
                </div>
                <div className="col" style={{ marginRight: '7px' }}>
                    <textarea 
                        rows="2" 
                        placeholder="Type to add new task" 
                        className="form-control task-text"
                        autoFocus
                        onChange={onTextChange}  
                    ></textarea>
                </div>
                <div style={{ padding: '.375rem' }}>
                    <img src={avatar} alt="avatar" className="img-avatar" />
                </div>
            </div>
            <div className="flex-row" style={{ border: '1px solid #E5E8E8', paddingRight: '10px' }}>
                <button
                    type="button"
                    className="btn custom-btn"
                    disabled={disablecomponents}>
                    <div className="flex-row">
                        <img src={maximize} alt="maximize" className="img-icon" />
                        <span className="btn-text">Open</span>
                    </div>
                </button>
                <button
                    type="button"
                    className="btn custom-btn">
                    <div className="flex-row">
                        <img src={calendar} alt="calendar" className="img-icon" />
                        <span className="btn-text">Today</span>
                    </div>
                </button>
                <button
                    type="button"
                    className="btn custom-btn">
                    <div className="flex-row">
                        <img src={unlock} alt="unlock" className="img-icon" />
                        <span className="btn-text">Public</span>
                    </div>
                </button>
                <button
                    type="button"
                    className="btn custom-btn">
                    <div className="flex-row">
                        <img src={sun} alt="sun" className="img-icon" />
                        <span className="btn-text">Normal</span>
                    </div>
                </button>
                <button
                    type="button"
                    className="btn custom-btn">
                    <div className="flex-row">
                        <img src={disc} alt="disc" className="img-icon" />
                        <span className="btn-text">Estimation</span>
                    </div>
                </button>
                <div style={{ width: '100%' }}></div>
                <button type="button" className="btn cancel-btn">Cancel</button>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}

export default FullTask;