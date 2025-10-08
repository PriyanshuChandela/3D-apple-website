import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () =>{
  return (
    <main className="bg-black">
      <Navbar/>
      <section id="Hero">
        <Hero />
      </section>
      <section id="Highlights">
        <Highlights />
      </section>
      <Model/>
      <section id="Features">
        <Features />
      </section>
      <HowItWorks/>
      <section id="Footer">
        <Footer />
      </section>
    </main>
  )

}
export default Sentry.withProfiler(App);
