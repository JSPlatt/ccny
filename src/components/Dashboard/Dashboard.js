import React from 'react'
import './Dashboard.css'
import Graph from './Graph'
import ToDo from './ToDo'


function Dashboard() {
    return (
        <div className='dashboard'>
           <div className='dashboard__left'>
                <Graph/>
            </div> 
            <div className='dashboard__right'>
                <ToDo/>
            </div>
        </div>

    )
}

export default Dashboard
