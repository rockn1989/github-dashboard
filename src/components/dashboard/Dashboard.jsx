import React from 'react';
import {v4} from 'uuid';
import GithubApi from '../../api/api';

import {CartItem} from '../index';

function Dashboard() {
    const api = new GithubApi();
    
    const [users, getUsers] = React.useState([]);

    React.useEffect(() => {
        api.getResource('repositories').then((results) => {
            getUsers(results);
            if(results && results.length > 0) {
                results.map(({full_name}) => {
                    console.log(full_name)
                    api.getUsers(full_name).then((res) => {
                        console.log(res);
                    })
                })
            }

        });
    }, []);

    return (
        <div className="dashboard-wrapper">
            <ul className="dashboard">
                {users && users.map((el) => <CartItem userData={el} id={v4} />)}
            </ul>
        </div>
    )
}

export default Dashboard;
