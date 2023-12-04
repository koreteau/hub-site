import React from 'react';
import { Welcome } from './components/Accueil';
import { LatestNews } from './components/LatestNews';



function Home () {
    return (
        <div>
            <Welcome />
            <LatestNews />
        </div>
    )
}

export default Home;