import NavigationBar from '../components/homepage/navigationBar';
import Intro from '../components/homepage/intro';
import Features from '../components/homepage/features';
import RecentActivity from '../components/homepage/recentActivity';
import Footer from '../components/homepage/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/landingPage.css"
import ReviewBuku from '../components/homepage/reviewBuku/reviewBuku';

const LandingPage = () => {
    return (
        <div>
            <div id='navbar'>
                <NavigationBar />
            </div>

            <div id='intro'>
                <Intro />
            </div>

            <div id='features'>
                <Features />
            </div>

            <div id='recentActivity'>
                <RecentActivity />
            </div>

            <div id='review'>
                <ReviewBuku />
            </div>

            <div id='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage