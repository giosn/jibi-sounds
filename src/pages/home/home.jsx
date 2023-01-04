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
import { StatusBar, Style } from '@capacitor/status-bar';

const HomePage = () => {

    const theme = localStorage.getItem('theme');
    const initialIsDark = theme == 'dark';
    StatusBar.setStyle({style: initialIsDark ? Style.Dark : Style.Light});
    StatusBar.setBackgroundColor({color: initialIsDark ? '#2c3e50' : '#ecf0f1'});
    let [isDark, setIsDark] = React.useState(initialIsDark);
    const handleClick = () => {
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        setIsDark(!isDark);
        StatusBar.setStyle({style: isDark ? Style.Dark : Style.Light});
        StatusBar.setBackgroundColor({color: isDark ? '#2c3e50' : '#ecf0f1'});
    };

    return (
        <Page name="home" dark={isDark}>

            {/* Top Navbar */}
            <Navbar
                noShadow
                noHairline
                dark={isDark}>
                <NavTitle>Jibi Sounds</NavTitle>
                <Button
                    round
                    iconMaterial={isDark ? "dark_mode" : "light_mode"}
                    onClick={() => handleClick()}>
                </Button>
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
                                style={r.style}
                                onClick={r.play()}>
                                {r.name}
                            </Button>
                        </Col>
                    })}
                </Row>
            </Block>

        </Page>
    );
};
export default HomePage;