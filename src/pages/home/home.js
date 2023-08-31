import './home.css';
import NavBar from '../../components/nav-bar/nav-bar';
import PreviewVideo from '../../components/preview-video/preview-video';
import VideoInfo from '../../components/video-info/video-info';

function Home() {
    return (
        <div id="home">
            <nav>
                <NavBar />
            </nav>
            <main>
                <PreviewVideo />
            </main>
            
            {/* <VideoInfo /> */}
        
        </div>
    )
}

export default Home;