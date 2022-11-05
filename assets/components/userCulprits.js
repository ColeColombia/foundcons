import React from 'react';
import "../styles/culprits.css"
import CupritDisplay from './culpritDisplay';
import CulpritsMenu from './culpritsMenu';

export default function Culprit(){
    return (
        <div className="container-fluid mt-3 py-3">
            <div className='row'>
                <CulpritsMenu />
                <CupritDisplay />
            </div>
        </div>
    )
}