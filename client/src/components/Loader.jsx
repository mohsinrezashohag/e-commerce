import React from 'react';
import { Spinner } from 'react-bootstrap';
import './component.css'
const Loader = () => {



    return (
        <div className="spinner-parent">
            <div className="spinner-border" role="status">
            </div>
        </div>


    );
};

export default Loader;