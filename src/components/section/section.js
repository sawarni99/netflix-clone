import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useEffect, useRef, useState } from 'react';
import { getRootStyle, getStyle } from '../../helper';
import { BOX_GAP, ITEM_PER_SCREEN, INITIAL_INDEX, VIDEO_CARD_WIDTH } from '../../constants';

// TODO :: Have to hide side bar if length of videos is less than items per screen.
// TODO :: Have to just pass videos array in sectionVideos, then while setting it we have to map it to <SectionVideo> with unique key.
// TODO :: If we slide too much (50 times) to the right then width of video card is getting overflow from the slider.

const Section = ({name}) => {
    const mainRef = useRef(null);
    const boxRefLeft = useRef(null);
    const leftSideBar = useRef(null);
    const initialIndex = Number(getRootStyle(INITIAL_INDEX));
    const [sliderIndex, setSliderIndex] = useState(initialIndex);
    const videoArray = [      // These are just sample data...
        <SectionVideo key='1' video={videos[0]} />, <SectionVideo key='2' video={videos[1]} />,
        <SectionVideo key='3' video={videos[12]} />, <SectionVideo key='4' video={videos[3]} />,
        <SectionVideo key='5' video={videos[4]} />, <SectionVideo key='6' video={videos[5]} />,
        <SectionVideo key='7' video={videos[6]} />, <SectionVideo key='8' video={videos[7]} />,
        <SectionVideo key='9' video={videos[8]} />, <SectionVideo key='10' video={videos[9]} />,
        // <SectionVideo key='11' video={videos[10]} />, <SectionVideo key='12' video={videos[11]} />,
    ];
    const [sectionVideos, setSectionVideos] = useState(videoArray);

    useEffect(() => {
        console.log(mainRef.current.children);
    } );

    // On Click side bars...
    const onClickSlider = (increment) => {
        let index = sliderIndex;
        const itemsPerScreen = Number(getRootStyle(ITEM_PER_SCREEN));
        const sectionVideoslength = sectionVideos.length;
        const videosLength = videoArray.length;
        const remaining = videosLength - itemsPerScreen;
        const itemIndex = index - initialIndex;
        if(itemsPerScreen < videosLength){

            // On Click right side of slider...
            if(increment) {
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


            // On Click left side of slider...
            } else {
                if(itemIndex > 0){
                    setSectionVideos(sectionVideos => {
                        const toRet = [
                            ...sectionVideos.slice(0, sectionVideoslength - itemsPerScreen)
                        ];
                        console.log(toRet);
                        
                        index -= 1;
                        mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;
                        setSliderIndex(index);
                        return toRet;
                    });

                } else {

                    mainRef.current.removeChild(mainRef.current.children[1]);
                    mainRef.current.removeChild(mainRef.current.children[1]);
                    mainRef.current.removeChild(mainRef.current.children[1]);
                    mainRef.current.removeChild(mainRef.current.children[1]);

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
                        sectionVideos
                    }
                </div>
                <div id='section-menu-right' onClick={() => onClickSlider(true)}>
                    <img className='side-bar-icon' src='./assets/icons/forword-arrow.png' alt='Next' />
                </div>
            </div>
        </div>
    )
}

export default Section;