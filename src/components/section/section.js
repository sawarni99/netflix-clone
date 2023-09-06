import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';
import { useRef } from 'react';

const Section = ({name}) => {
    const menuRef = useRef(null);
    const video = videos[12];
    return (
        <div id='section'>
            <div id='section-header'>
                {name}
            </div>
            <div id='section-menu' ref={menuRef}>
                <SectionVideo video={video} parentRef={menuRef} />
            </div>
        </div>
    )
}

export default Section;