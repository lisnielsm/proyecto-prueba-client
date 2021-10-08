import React from 'react';

const ListItem = ({text}) => {
    return ( 
        <div className="flex-row">
            <div className="checkbox"></div>
            <div className="flex-left-centered" style={{ width: '100%' }}><span>{text}</span></div>
        </div>
     );
}
 
export default ListItem;