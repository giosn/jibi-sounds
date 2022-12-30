import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    Block,
    Row,
    Col,
    Button
} from 'framework7-react';
import { recordings } from './recordings';
import './home.scss';

const HomePage = () => (
    <Page name="home">

        {/* Top Navbar */}
        <Navbar>
            <NavTitle>Jibi Sounds</NavTitle>
        </Navbar>

        {/* Page content */}
        <Block>
            <Row>
                {recordings.map((r, i) => {
                    return <Col key={i} width="50">
                        <Button
                            fill
                            raised
                            large
                            onClick={r.play()}>
                            {r.name}
                        </Button>
                    </Col>
                })}
            </Row>
        </Block>

    </Page>
);
export default HomePage;