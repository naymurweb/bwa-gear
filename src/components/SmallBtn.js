import React from 'react';

const SmallBtn = ({children}) => {
    return (
        <div>
            <button className='btn bg-myBg2 px-3 py-1 rounded text-secondary'>{children}</button>
            
        </div>
    );
};

export default SmallBtn;