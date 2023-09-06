import './section-video.css'
import { useState, useRef } from 'react';
import VideoInfo from '../video-info/video-info';
import { getStyle, getNumFromPx, getPxFromNum } from '../../helper';

const SectionVideo = ({video, parentRef}) => {

    const [ended, setEnded] = useState(true);
    const [infoClicked, setInfoClicked] = useState(false);
    const mainRef = useRef(null);
    const videoRef = useRef(null);

    let genres = [];
    video.genres.forEach(element => {
        genres.push(element);
        genres.push(<div key={element}/>);
    });
    genres.pop();


    const onEnded = () => {
        setEnded(true)
    }

    const onInfoClicked = () => {
        setInfoClicked(infoClicked => !infoClicked);
    }

    const onMouseOver = () => {
        /*
         --> 218.64px / 2
         --> 328px / 2
        */


        // const parentMargin = getStyle(parentRef, 'margin-left');
        // const mainMargin = getStyle(mainRef, 'margin-left');
        const width = getNumFromPx(getStyle(mainRef, 'width'));
        const largeWidth = width*1.5;
        const margin = (largeWidth - width) / 2;
        console.log(getPxFromNum(margin));

        // console.log(getStyle(mainRef, 'width'))
        mainRef.current.style.marginLeft = getPxFromNum(margin);
        setEnded(false);
    }

    const onMouseOut = () => {
        mainRef.current.style.marginLeft = '0px';
        setEnded(true);
    }

    return (
        <>
            <div id='section-video' ref={mainRef} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                {!ended ? 
                    <video 
                        id='section-video-video' 
                        onEnded={onEnded} 
                        ref={videoRef} 
                        autoPlay 
                        muted
                    >
                        <source src={video.trailer} />
                    </video> : 
                    <img id='section-video-poster' src={video.poster} alt={video.displayName} />
                }
                <div id='section-video-info'>
                    <div id='section-video-info-top'>
                        <div id='section-video-info-play'>
                            <img src='./assets/icons/play-icon.png' alt='Play' />
                        </div>
                        <div id='section-video-info-info' onClick={onInfoClicked}>
                            <img src='./assets/icons/forword-arrow.png' alt='Play' />
                        </div>
                    </div>
                    <div id='section-video-info-mid'>
                        <span id='section-video-info-match'>{video.match} Match</span>
                        &nbsp;&nbsp;&nbsp;
                        <span id='section-video-info-rated'>{video.rated}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span id='section-video-info-duration'>{video.duration}</span>
                    </div>
                    <div id='section-video-info-bottom'>
                        {
                            genres
                        }
                    </div>
                </div>
            </div>
            { 
                infoClicked && 
                <VideoInfo 
                    video={video} 
                    onInfoClicked={onInfoClicked} 
                    infoClicked={infoClicked} /> 
            }
        </>
    )
}

export default SectionVideo;