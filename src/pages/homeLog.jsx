import NavigationBarLog from '../components/homepage/navigationBarLog';
import VerfificationNotif from '../components/homepage/verificationNotif';
import Intro from '../components/homepage/intro';
import Features from '../components/homepage/features';
import RecentActivityLog from '../components/homepage/recentActivityLog';
import Footer from '../components/homepage/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/landingPage.css"
import ReviewBuku from '../components/homepage/reviewBuku/reviewBuku';

const homeLog = () => {
    return (
        <div>
            <div id='navbar'>
                <NavigationBarLog />
            </div>

            <div id='verifNotif'>
                <VerfificationNotif />
            </div>

            <div id='intro'>
                <Intro />
            </div>

            <div id='features'>
                <Features />
            </div>

            <div id='recentActivity'>
                <RecentActivityLog />
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

export default homeLog