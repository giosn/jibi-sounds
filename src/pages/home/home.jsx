import React, { useState, useEffect } from 'react';
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
import { Device } from '@capacitor/device';
import { StatusBar, Style } from '@capacitor/status-bar';
import { ThemeDetection } from '@awesome-cordova-plugins/theme-detection';

const HomePage = () => {

    const [platformIsWeb, setPlatformIsWeb] = useState();
    const [themeDetectionIsAvailable, setThemeDetectionIsAvailable] = useState();
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState();

    useEffect(() => {
        const getPlatformIsWeb = async () => {
            const platformIsWeb = await Device.getInfo().then(deviceInfo => deviceInfo.platform == 'web');
            setPlatformIsWeb(platformIsWeb);
        };
        getPlatformIsWeb();

        if (!platformIsWeb) {
            const getThemeDetectionIsAvailable = async () => {
                const themeDetectionIsAvailable = await ThemeDetection.isAvailable().then(r => r.value).catch(e => false);
                setThemeDetectionIsAvailable(themeDetectionIsAvailable);
            };
            getThemeDetectionIsAvailable();
        }

        if (themeDetectionIsAvailable) {
            const getIsDarkModeEnabled = async () => {
                const isDarkModeEnabled = await ThemeDetection.isDarkModeEnabled().then(r => r.value).catch(e => false);
                setIsDarkModeEnabled(isDarkModeEnabled);
            };
            getIsDarkModeEnabled();
        }
    });

    console.log(platformIsWeb, themeDetectionIsAvailable, isDarkModeEnabled);

    if (!platformIsWeb) {
        StatusBar.setStyle({style: isDarkModeEnabled ? Style.Dark : Style.Light}).catch(e => e);
        StatusBar.setBackgroundColor({color: isDarkModeEnabled ? '#2c3e50' : '#ecf0f1'}).catch(e => e);
    }

    return (
        <Page name="home" dark={isDarkModeEnabled}>

            {/* Top Navbar */}
            <Navbar
                noShadow
                noHairline
                dark={isDarkModeEnabled}>
                <NavTitle>Jibi Sounds</NavTitle>
                <Button
                    round
                    iconMaterial={isDarkModeEnabled ? "dark_mode" : "light_mode"}>
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