import React from 'react'
import './Dashboard.css'
import Graph from './Graph'
import ToDo from './ToDo'


function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>DASHBOARD</h1>
            <Graph/>
            <ToDo/>
        </div>

    )
}

export default Dashboard
