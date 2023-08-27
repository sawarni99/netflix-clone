import './home.css';
import NavBar from '../../components/nav-bar/nav-bar';
import PreviewVideo from '../../components/preview-video/preview-video';

function Home() {
    return (
        <div id="home">
            <nav>
                <NavBar />
            </nav>
            <main>
                <PreviewVideo />
            </main>
        </div>
    )
}

export default Home;