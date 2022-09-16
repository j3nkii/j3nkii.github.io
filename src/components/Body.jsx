import React from 'react';

import { Header } from './Header';
import { About } from './About';
import { Resume } from './Resume';
import { Footer } from './Footer';

const Body = () => {
    return (
        <div id="mainContainer">
            <Header />
            <div class="content">
                <About />
                <Resume />
            </div>
            <Footer />
        </div>
    )
}

export default Body