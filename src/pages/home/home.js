import './home.css';
import NavBar from '../../components/nav-bar/nav-bar';
import PreviewVideo from '../../components/preview-video/preview-video';
import VideoInfo from '../../components/video-info/video-info';
import { videos } from '../../assets';
import { useState } from 'react';
import Carousel from '../../components/carousel/carousel';
import { getRandomUniqueNumber } from '../../helper';

function Home() {
    const video = videos[11]; // This video is for preview...
    const [infoClicked, setInfoClicked] = useState(false);
    const [startTime, setStartTime] = useState(0);

    const onInfoClicked = (time) => {
        setInfoClicked((infoClicked) => {
            setStartTime(time);
            return !infoClicked;
        })
    }

    const getRandomVideos = (length) => {
        return getRandomUniqueNumber(videos.length, length).map((index) => {
            return videos[index];
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
                <section id='home-menu-container'>
                    <div id='home-menu'>
                        <Carousel name='Blockbuster' videos={getRandomVideos(10)} />
                        <Carousel name='Trending Now' videos={getRandomVideos(10)} />
                        <Carousel name='Popular on Netflix' videos={getRandomVideos(10)} />
                    </div>
                </section>
            </main>     
        </div>
    )
}

export default Home;