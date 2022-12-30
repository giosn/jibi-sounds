import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    Block
} from 'framework7-react';

const HomePage = () => (
    <Page name="home">

        {/* Top Navbar */}
        <Navbar>
            <NavTitle>Jibi Sounds</NavTitle>
        </Navbar>

        {/* Page content */}
        <Block>
            <p>Here is your blank Framework7 app. Let's see what we have here.</p>
        </Block>

    </Page>
);
export default HomePage;