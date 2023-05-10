import './App.scss';
import Header from './Header/Header';
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import About from './About/About';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function App({data}) {
    useEffect(() => {
        Aos.init({duration:  2000});
    }, []);

    return (
        <div className="App">
            <Header header={data.header}/>
            <main className='main'>
                <Hero hero={data.heroSection} />
                <Features features={data.featuresSection}/>
                <About about={data.aboutSection}/>
                <Menu menu={data.menuSection}/>
                <Contact contact={data.contactSection}/>
            </main>
            <Footer footer={data.footer}/>
        </div>
    );
}

export default App;
