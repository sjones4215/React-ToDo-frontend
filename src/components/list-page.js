import React from 'react';
import ListPageFunction from './ListPageFunction'
import '../styles/list-page.css';
import { ListGroup } from 'react-bootstrap';

const ListPage = () => {
    return(
    <div clasName="list-container">
    <ListGroup id="list">
        <ListGroup.Item action onClick={ListPageFunction}>
            This one is a button
        </ListGroup.Item>
        <ListGroup.Item action onClick={ListPageFunction}>
            This one is a button
        </ListGroup.Item>
        <ListGroup.Item action onClick={ListPageFunction}>
            This one is a button
        </ListGroup.Item>
        <ListGroup.Item action onClick={ListPageFunction}>
            This one is a button
        </ListGroup.Item>
    </ListGroup>
    </div>
    );
};

export default ListPage;