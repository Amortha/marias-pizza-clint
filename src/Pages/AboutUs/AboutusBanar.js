import React from 'react';
import { Link } from 'react-router-dom';

const AboutusBanar = () => {
    return (
        <div>
            <div className='w-full h-40 bg-zinc-300 text-center'>
                <h1 className='pt-16 text-2xl Alkatra font-bold'>ABOUT US</h1>
                <h1 className='text-2xl Alkatra'><Link to="/">Home</Link> /About Us</h1>
            </div>
            <div className='text-center mt-20 mx-4'>
                <h1 className='text-2xl lg:text-4xl Alkatra font-bold'>Welcome to <span className='text-red-600'>Pizza Home</span></h1>
                <p className='Alkatra my-6'>Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, <br />
                    debitis phaedrum conceptam vis at. Fugit choro scriptorem nam an, vel ex possit audire. Qui elitr graeci referrentur ad, eu ludus laudem tincidunt vel, ad vim,<br />
                    wisi graeci efficiendi.
                </p>
                <p className='Alkatra text-yellow-400 text-xl font-bold'>– Katherine Issac</p>
                <p className='text-xl text-red-900'>FOUNDER - CEO</p>
            </div>
        </div>
    );
};

export default AboutusBanar;