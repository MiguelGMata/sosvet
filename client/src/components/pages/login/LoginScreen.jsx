import React from 'react'; 
import FormLogin from '../../molecules/form/FormLogin';
import Image from '../../atoms/image/image';
import './loginScreen.css';

const LoginScreen = () => {

    return (
        <>
          <main className="main-loginScreen">
            <section className="section-loginScreen">
                <FormLogin />
            </section>
            <Image image="https://ik.imagekit.io/logoMGM/sosvet/vetochien.jpg?updatedAt=1727343931035" width='30%' height='30%' className="image-contact"/>
          </main>
        </>
    );
};
export default LoginScreen;