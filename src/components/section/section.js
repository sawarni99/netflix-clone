import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useRef, useState } from 'react';
import { getNumFromCSSUnit, getRootStyle, getStyle } from '../../helper';
import { ITEM_PER_SCREEN, INITIAL_INDEX, VIDEO_CARD_WIDTH, SLIDE_TRANSITION_DELAY } from '../../constants';

// TODO :: Have to just pass videos array in sectionVideos, then while setting it we have to map it to <SectionVideo> with unique key.

const Section = ({name}) => {
    const mainRef = useRef(null);
    const boxRefLeft = useRef(null);
    const leftSideBar = useRef(null);
    const rightSideBar = useRef(null);
    const initialIndex = Number(getRootStyle(INITIAL_INDEX));
    const [sliderIndex, setSliderIndex] = useState(initialIndex);
    const videoArray = [      // These are just sample data...
        videos[0], videos[1], videos[2], videos[3], videos[4], videos[5], videos[6], videos[7], videos[8], videos[9],   
    ];
    const [sectionVideos, setSectionVideos] = useState(videoArray);

    // On Click side bars...
    const onClickSlider = (increment) => {
        let index = sliderIndex;
        const itemsPerScreen = Number(getRootStyle(ITEM_PER_SCREEN));
        const sectionVideoslength = sectionVideos.length;
        const videosLength = videoArray.length;
        const remaining = videosLength - itemsPerScreen;
        const itemIndex = index - initialIndex;
        const delay = getNumFromCSSUnit(getRootStyle(SLIDE_TRANSITION_DELAY), 's');
        if(itemsPerScreen < videosLength){

            // On Click right side of slider...
            if(increment) {
                if(itemIndex >= 0){
                    setSectionVideos(sectionVideos => {
                        let toRet = [];
                        if(getStyle(leftSideBar, 'visibility') === 'hidden'){
    
                            toRet = [
                                ...sectionVideos.slice(itemsPerScreen, sectionVideoslength),
                                ...sectionVideos,
                                ...sectionVideos.slice(itemIndex*itemsPerScreen, itemIndex*itemsPerScreen + itemsPerScreen)
                            ];
    
                            boxRefLeft.current.style.minWidth = `calc(${getStyle(boxRefLeft, 'min-width')} - ${remaining} * var(${VIDEO_CARD_WIDTH}))`;
                        } else {
                            
                            toRet = [
                                ...sectionVideos,
                                ...sectionVideos.slice(itemIndex*itemsPerScreen + remaining, itemIndex*itemsPerScreen + itemsPerScreen + remaining)
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
                        setSectionVideos(sectionVideos => {
                            const toRet = [
                                ...sectionVideos.slice(itemsPerScreen, sectionVideoslength)
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
                        setSectionVideos(sectionVideos => {
                            const toRet = [
                                ...sectionVideos.slice(0, sectionVideoslength - itemsPerScreen)
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
                    
                    setSectionVideos(sectionVideos => {
                        const toRet = [
                            ...sectionVideos.slice(remaining, remaining + itemsPerScreen),
                            ...sectionVideos
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
    
    return (
        <div id='section'>
            <div id='section-header'>
                <div id='section-title'>{name}</div>
            </div>
            <div id='section-menu-container'>
                <div id='section-menu-left' ref={leftSideBar} onClick={() => onClickSlider(false)}>
                    <img className='side-bar-icon' src='./assets/icons/backword-arrow.png' alt='Back' />
                </div>
                <div id='section-menu' ref={mainRef}>
                    <div id='section-menu-box-left' ref={boxRefLeft} />
                    {
                        sectionVideos.map(video => {
                            const key = Date.now() * Math.random() // Generatin unique key...
                            return <SectionVideo video={video} key={key} />
                        })
                    }
                </div>
                <div id='section-menu-right' ref={rightSideBar} onClick={() => onClickSlider(true)}>
                    <img className='side-bar-icon' src='./assets/icons/forword-arrow.png' alt='Next' />
                </div>
            </div>
        </div>
    )
}

export default Section;