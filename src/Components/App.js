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
import {Routes, Route} from "react-router-dom";


function App({data}) {
    useEffect(() => {
        Aos.init({duration:  2000});
    }, []);

    return (
        <div className="App">
            <Header header={data.header}/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Hero hero={data.heroSection} />}/>
                    <Route path="/about" element={ <About about={data.aboutSection}/>}/>
                    <Route path="/menu" element={<Menu menu={data.menuSection}/>}/>
                    <Route path="/contact" element={ <Contact contact={data.contactSection}/>}/>
                </Routes>
               <Features features={data.featuresSection}/>
            </main>
            <Footer footer={data.footer}/>
        </div>
    );
}

export default App;
