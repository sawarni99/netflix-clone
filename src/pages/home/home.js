import './home.css';
import NavBar from '../../components/nav-bar/nav-bar';
import PreviewVideo from '../../components/preview-video/preview-video';
import VideoInfo from '../../components/video-info/video-info';
import { videos } from '../../assets';
import { useState } from 'react';
import Carousel from '../../components/carousel/carousel';

function Home() {
    const video = videos[11];
    const [infoClicked, setInfoClicked] = useState(false);
    const [startTime, setStartTime] = useState(0);

    const onInfoClicked = (time) => {
        setInfoClicked((infoClicked) => {
            setStartTime(time);
            return !infoClicked;
        })
    }

    return (
        <div id="home">
            <nav>
                <NavBar />
            </nav>
            <main>
                <PreviewVideo video={video} onInfoClicked={onInfoClicked} infoClicked={infoClicked} />
                {
                    infoClicked && 
                    <VideoInfo 
                        video={video} 
                        onInfoClicked={onInfoClicked} 
                        infoClicked={infoClicked} 
                        startTime={startTime} 
                    /> 
                }

                <div id='home-menu-container'>
                    <div id='home-menu'>
                        <div id='home-menu-section'>
                            <Carousel name='Popular on Netflix' />
                        </div>
                    </div>
                </div>
            </main>     
        </div>
    )
}

export default Home;