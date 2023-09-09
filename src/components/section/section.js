import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useRef, useState } from 'react';
import { getRootStyle } from '../../helper';
import { ITEM_PER_SCREEN, VIDEO_CARD_WIDTH } from '../../constants';

const Section = ({name}) => {
    const mainRef = useRef(null);
    const boxRefLeft = useRef(null);
    const boxRefRight = useRef(null);
    const video = videos[12];
    const [sliderIndex, setSliderIndex] = useState(0);
    const [sectionVideos, setSectionVideos] = useState([
        <SectionVideo key='1' video={videos[11]} />, <SectionVideo key='2' video={video} />,
        <SectionVideo key='3' video={video} />, <SectionVideo key='4' video={video} />,
        <SectionVideo key='5' video={video} />, <SectionVideo key='6' video={video} />,
        <SectionVideo key='7' video={video} />, <SectionVideo key='8' video={video} />,
        <SectionVideo key='9' video={video} />, <SectionVideo key='10' video={video} />,
        <SectionVideo key='11' video={video} />
    ]);

    const onClickSlider = (increment) => {
        let index = sliderIndex;
        const itemsPerScreen = getRootStyle(ITEM_PER_SCREEN) - 1;
        const length = sectionVideos.length;

        if(itemsPerScreen < sectionVideos.length){

            if(increment) {  // On Click right side of slider...
                setSectionVideos(sectionVideos => {
                    const toRet = [
                        ...sectionVideos.slice(itemsPerScreen, length), 
                        ...sectionVideos.slice(0, itemsPerScreen)
                    ];
                    console.log(toRet);
                    return toRet;
                });

                index += 1;
                boxRefLeft.current.style.minWidth = `calc(${index} * 100% - ${getRootStyle(VIDEO_CARD_WIDTH)})`;


            } else {    // On Click left side of slider...
                setSectionVideos(sectionVideos => {
                    const toRet = [
                        ...sectionVideos.slice(length - itemsPerScreen, length), 
                        ...sectionVideos.slice(0, length - itemsPerScreen)
                    ];
                    console.log(toRet);
                    return toRet;
                });

                index -= 1;
                // boxRefLeft.current.style.minWidth = `0px`;
                // boxRefRight.current.style.minWidth = `calc(${index<0 ? -1*index : index} * 100% - ${getRootStyle(VIDEO_CARD_WIDTH)})`;
            }
            mainRef.current.style.transform = `translateX(calc(${index} * -100%))`;
            setSliderIndex(index);

        }
    }

    return (
        <div id='section'>
            <div id='section-header'>
                <div id='section-title'>{name}</div>
            </div>
            <div id='section-menu-container'>
                <div id='section-menu-left' onClick={() => onClickSlider(false)}></div>
                <div id='section-menu' ref={mainRef}>
                    <div id='section-menu-box-left' ref={boxRefLeft} />
                    {
                        sectionVideos
                    }
                    <div id='section-menu-box-right' ref={boxRefRight} />
                    </div>
                <div id='section-menu-right' onClick={() => onClickSlider(true)}></div>
            </div>
        </div>
    )
}

export default Section;