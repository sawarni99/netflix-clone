import './section.css'
import { videos } from '../../assets';
import SectionVideo from '../section-video/section-video';

const Section = ({name}) => {
    const video = videos[12];
    return (
        <div id='section'>
            <div id='section-header'>
                {name}
            </div>
            <div id='section-menu'>
                <SectionVideo video={video} />
            </div>
        </div>
    )
}

export default Section;