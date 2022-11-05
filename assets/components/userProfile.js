import React from 'react';
import "../styles/profile.css";

export default function UserProfile(){
    return (
        <>
        <div className='container mt-5 py-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-3'>
                    <div className='user-details'>
                        <h1 className='text-center'><i className="bi bi-person-circle"></i></h1>
                        <ul className="list-group">
                            <li className="list-group-item">Kholani Benelzane</li>
                            <li className="list-group-item">Joined: 1 Dec 2022</li>
                            <li className="list-group-item"><button type="button" className="btn">Delete Account</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}