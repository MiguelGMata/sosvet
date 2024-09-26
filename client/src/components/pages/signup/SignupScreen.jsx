import React from 'react'; 
import Image from '../../atoms/image/image';
import FormSingup from '../../molecules/form/FormSingnup';
import './signupScreen.css';

const SignupScreen = () => {

    return (
        <>
        <main className='main-signupScreen'>
        <Image image="https://ik.imagekit.io/logoMGM/sosvet/gatico.jpg?updatedAt=1727343930980" width='30%' height='40%' className="image-contact"/>
            <section className="section-signupScreen">
                <FormSingup />
            </section>
          </main>
        </>
    );
};
export default SignupScreen;