import './Home.css'
import React from 'react';
import TransactionForm from './TransactionForm';

function Home() {
    return (
        <div className='container'>
            <div className='content'>
                
            </div>
            <div className='sidebar'>
                <TransactionForm />
            </div>
        </div>
    );
}

export default Home;