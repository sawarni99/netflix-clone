import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useEffect, useRef, useState } from 'react';
import { getRootStyle } from '../../helper';
import { BOX_GAP, ITEM_PER_SCREEN, INITIAL_INDEX } from '../../constants';

// TODO :: Have to hide side bar if length of videos is less than items per screen.
// TODO :: Have to just pass videos array in sectionVideos, then while setting it we have to map it to <SectionVideo> with unique key.
// TODO :: If we slide too much (50 times) to the right then width of video card is getting overflow from the slider.

const Section = ({name}) => {
    const mainRef = useRef(null);
    const boxRefLeft = useRef(null);
    const leftSideBar = useRef(null);
    const initialIndex = new Number(getRootStyle(INITIAL_INDEX));
    const [sliderIndex, setSliderIndex] = useState(initialIndex);
    const [sectionVideos, setSectionVideos] = useState([      // These are just sample data...
        <SectionVideo key='1' video={videos[0]} />, <SectionVideo key='2' video={videos[1]} />,
        <SectionVideo key='3' video={videos[12]} />, <SectionVideo key='4' video={videos[3]} />,
        <SectionVideo key='5' video={videos[4]} />, <SectionVideo key='6' video={videos[5]} />,
        <SectionVideo key='7' video={videos[6]} />, <SectionVideo key='8' video={videos[7]} />,
        <SectionVideo key='9' video={videos[8]} />, <SectionVideo key='10' video={videos[9]} />,
        <SectionVideo key='11' video={videos[10]} />, <SectionVideo key='12' video={videos[11]} />,
    ]);


    // On Click side bars...
    const onClickSlider = (increment) => {
        let index = sliderIndex;
        const itemsPerScreen = new Number(getRootStyle(ITEM_PER_SCREEN));
        const length = sectionVideos.length;
        const itemIndex = index - initialIndex;
        if(itemsPerScreen < sectionVideos.length){

            // On Click right side of slider...
            if(increment) {
                setSectionVideos(sectionVideos => {
                    const toRet = [
                        ...sectionVideos,
                        ...sectionVideos.slice(itemIndex*itemsPerScreen, itemIndex*itemsPerScreen + itemsPerScreen)
                    ];
                    console.log(toRet);
                    return toRet;
                });

                index += 1;
                mainRef.current.style.transform = `translateX(calc((${index} * -100%))`;
                leftSideBar.current.style.visibility = 'visible';
                leftSideBar.current.children[0].style.display = 'inline'; 
                setSliderIndex(index);


            // On Click left side of slider...
            } else {
                setSectionVideos(sectionVideos => {
                    const toRet = [
                        ...sectionVideos.slice(0, length - itemsPerScreen)
                    ];
                    console.log(toRet);
                    return toRet;
                });

                index -= 1;
                mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;
                setSliderIndex(index);
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