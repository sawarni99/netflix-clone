import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useEffect, useRef } from 'react';
// import { getStyle, getNumFromPx } from '../../helper';

const Section = ({name}) => {
    const menuRef = useRef(null);
    const video = videos[12];

    useEffect(() => {
        // console.log(getStyle(menuRef, 'width'))
        // console.log(menuRef.current.scrollWidth);

        const handleWindowResize = () =>{
            // TODO...
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        <div id='section'>
            <div id='section-header'>
                {name}
            </div>
            <div id='section-menu-container'>
                <div id='section-menu' ref={menuRef}>
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                    <SectionVideo video={video} />
                </div>
            </div>
        </div>
    )
}

export default Section;