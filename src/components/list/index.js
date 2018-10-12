import React from 'react';
import style from './styles.scss';
import styles from '../../styles/main.scss'


class List extends React.Component {

    render(){
        return (
            <ul className="list">
                <li>Meat</li>
                <li>Rice</li>
                <li className="primary">Beer</li>
                <li>Fish</li>
                <li>Eggs</li>
            </ul>
        );
    }
}

export default List;