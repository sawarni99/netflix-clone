import './carousel.css'
import { videos } from '../../assets';
import VideoCard from '../video-card/video-card';
import VideoInfo from '../video-info/video-info';
import { useRef, useState } from 'react';
import { getNumFromCSSUnit, getRootStyle, getStyle } from '../../helper';
import { ITEM_PER_SCREEN, INITIAL_INDEX, VIDEO_CARD_WIDTH, SLIDE_TRANSITION_DELAY } from '../../constants';

const Carousel = ({name}) => {
    const mainRef = useRef(null);
    const boxRefLeft = useRef(null);
    const leftSideBar = useRef(null);
    const rightSideBar = useRef(null);
    const initialIndex = Number(getRootStyle(INITIAL_INDEX));
    const [sliderIndex, setSliderIndex] = useState(initialIndex);
    const videoArray = [      // These are just sample data...
        videos[0], videos[1], videos[2], videos[3], videos[4], videos[5], videos[6], videos[7], videos[8], videos[9],   
    ];
    const [videoCards, setvideoCards] = useState(videoArray);
    const [currentVideo, setCurrentVideo] = useState(null);

    // On Click side bars...
    const onClickSlider = (increment) => {
        let index = sliderIndex;
        const itemsPerScreen = Number(getRootStyle(ITEM_PER_SCREEN));
        const videoCardslength = videoCards.length;
        const videosLength = videoArray.length;
        const remaining = videosLength - itemsPerScreen;
        const itemIndex = index - initialIndex;
        const delay = getNumFromCSSUnit(getRootStyle(SLIDE_TRANSITION_DELAY), 's');
        if(itemsPerScreen < videosLength){

            // On Click right side of slider...
            if(increment) {
                if(itemIndex >= 0){
                    setvideoCards(videoCards => {
                        let toRet = [];
                        if(getStyle(leftSideBar, 'visibility') === 'hidden'){
    
                            toRet = [
                                ...videoCards.slice(itemsPerScreen, videoCardslength),
                                ...videoCards,
                                ...videoCards.slice(itemIndex*itemsPerScreen, itemIndex*itemsPerScreen + itemsPerScreen)
                            ];
    
                            boxRefLeft.current.style.minWidth = `calc(${getStyle(boxRefLeft, 'min-width')} - ${remaining} * var(${VIDEO_CARD_WIDTH}))`;
                        } else {
                            
                            toRet = [
                                ...videoCards,
                                ...videoCards.slice(itemIndex*itemsPerScreen + remaining, itemIndex*itemsPerScreen + itemsPerScreen + remaining)
                            ];
                        }
                        console.log(toRet);
    
                        index += 1;
                        leftSideBar.current.style.visibility = 'visible';
                        leftSideBar.current.children[0].style.display = 'inline';
                        mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;
                        setSliderIndex(index);
                        return toRet;
                    });
                } else {

                    // Removing the cards which are not shown in screen, 
                    // because for some reasons they are not removed from UI if they are not in window...
                    // const removeLength = remaining - (itemIndex * itemsPerScreen);
                    // for(let i=0; i < removeLength; i++){
                    //     mainRef.current.removeChild(mainRef.current.children[1]);
                    // }

                    index += 1;
                    mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;

                    setTimeout(() => {
                        setvideoCards(videoCards => {
                            const toRet = [
                                ...videoCards.slice(itemsPerScreen, videoCardslength)
                            ];
                            console.log(toRet);
                            
                            boxRefLeft.current.style.minWidth = `calc(${getStyle(boxRefLeft, 'min-width')} + 100%)`;
                            setSliderIndex(index);
                            return toRet;
                        });
                    }, delay* 1000);

                }


            // On Click left side of slider...
            } else {

                if(itemIndex > 0){
                    index -= 1;
                    mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;

                    setTimeout(() => {
                        setvideoCards(videoCards => {
                            const toRet = [
                                ...videoCards.slice(0, videoCardslength - itemsPerScreen)
                            ];
                            console.log(toRet);
    
                            setSliderIndex(index);
                            return toRet;
                        });
                    }, delay * 1000);

                } else {

                    // Removing the cards which are not shown in screen, 
                    // because for some reasons they are not removed from UI if they are not in window...
                    // const removeLength = remaining - (itemIndex * itemsPerScreen);
                    // for(let i=0; i < removeLength; i++){
                    //     mainRef.current.removeChild(mainRef.current.children[1]);
                    // }
                    
                    setvideoCards(videoCards => {
                        const toRet = [
                            ...videoCards.slice(remaining, remaining + itemsPerScreen),
                            ...videoCards
                        ];
                        console.log(toRet);
                        
                        index -= 1;
                        boxRefLeft.current.style.minWidth = `calc(${getStyle(boxRefLeft, 'min-width')} - 100%)`;
                        mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;
                        setSliderIndex(index);
                        return toRet;
                    });     
                    
                }
            }
        }
    }

    const onInfoClicked = (video) => {
        if(typeof video === 'object'){
            setCurrentVideo(video);
        }else{
            setCurrentVideo(null);
        }
    }
    
    return (
        <div id='carousel'>
            <div id='carousel-header'>
                <div id='carousel-title'>{name}</div>
            </div>
            <div id='carousel-menu-container'>
                <div id='carousel-menu-left' ref={leftSideBar} onClick={() => onClickSlider(false)}>
                    <img className='side-bar-icon' src='./assets/icons/backword-arrow.png' alt='Back' />
                </div>
                <div id='carousel-menu' ref={mainRef}>
                    <div id='carousel-menu-box-left' ref={boxRefLeft} />
                    {
                        videoCards.map(video => {
                            const key = Date.now() * Math.random() // Generating unique key...
                            return <VideoCard 
                                setCurrentVideo={onInfoClicked} 
                                video={video} 
                                key={key} 
                                leftSide={leftSideBar}
                                rightSide={rightSideBar} />
                        })
                    }
                </div>
                <div id='carousel-menu-right' ref={rightSideBar} onClick={() => onClickSlider(true)}>
                    <img className='side-bar-icon' src='./assets/icons/forword-arrow.png' alt='Next' />
                </div>
            </div>
            {
                (currentVideo !== null) ?
                <VideoInfo 
                    video={currentVideo} 
                    onInfoClicked={onInfoClicked} 
                    startTime={0} 
                /> : null
            }
        </div>
    )
}

export default Carousel;