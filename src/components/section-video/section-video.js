import './section-video.css'
import SectionVideoPreview from '../section-video-preview/section-video-preview';

const SectionVideo = ({video}) =>{
    return (
        <div id='section-video'>
            {/* <img id='section-video-poster' src={video.poster} alt={video.displayName} /> */}
            <SectionVideoPreview video={video} />

        </div>
    )
}

export default SectionVideo;