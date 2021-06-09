import { } from '@material-ui/core';
import React, { } from 'react'
import { Button, ListGroup, Card } from 'react-bootstrap'
import Server from './Server';

function LeftBar({ show, close }) {

    const servers = [
        {
            owner: "achraf", id: 1, name: "maroc"
        },
        {
            owner: "achraf", id: 1, name: "maroc"
        },
        {
            owner: "achraf", id: 1, name: "maroc"
        }
    ]
    const selectServerHandler = (id) => {
        close();
        console.log(`Server no : ${id}`)
    }
    return (
        <div className={`sidebar ${!show ? 'hide' : ''}`}>
            <Card>
                <Card.Header>
                    <div className="leftbar_card_header_container">
                        Servers
                    <Button variant="danger" onClick={() => close()}>X</Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <ListGroup as="ul">
                        {
                            servers.map
                                (
                                    (s, i) => <Server server={s} key={i} onSelectServer={selectServerHandler} />
                                )
                        }
                    </ListGroup>

                </Card.Body>
            </Card>
        </div>
    )
}

export default LeftBar
