
import React from 'react'
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap'

function Server({ server, onSelectServer }) {
    return (
        <ListGroup.Item >
            <Container>
                <Row>
                    <Col>
                        {server.owner}
                    </Col>
                    <Col>
                        {server.name}
                    </Col>
                    <Col>
                        <Button onClick={() => onSelectServer(server.id)}>
                            Join
                        </Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}

export default Server
