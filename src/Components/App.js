import './App.scss';
import Header from './Header/Header';
import Hero from "./Hero/Hero";
import Features from "./Features/Features";


function App({data}) {
    return (
        <div className="App">
            <Header header={data.header}/>
            <main className='main'>
                <Hero hero={data.heroSection}/>
                <Features features={data.featuresSection}/>
            </main>
        </div>
    );
}

export default App;
