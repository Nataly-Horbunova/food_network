import './Main.scss';
import About from './About/About';
import Hero from './Hero/Hero';
import Features from './Features/Features';

const Main = () => {
    return (
        <main className='main'>
            <Hero/>
            <Features/>
            <About/>

        </main>
    )
}

export default Main;