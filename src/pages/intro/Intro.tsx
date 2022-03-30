import { Header } from '../../components/home/Header';
import { IntroService, IntroTeam } from '../../components/intro';

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
