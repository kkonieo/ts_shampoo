import { Header } from '../../components/home/Header';
import { IntroService } from '../../components/intro/IntroService';
import { IntroTeam } from '../../components/intro/IntroTeam';

const Intro = () => {
    return (
        <>
            <Header />
            <IntroService />
            <IntroTeam />
        </>
    );
};

export default Intro;
