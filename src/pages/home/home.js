import React from "react";
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import SectionThree from '../../components/SectionThree/SectionThree';
import SectionFour from '../../components/SectionFour/SectionFour';
import SectionFive from '../../components/SectionFive/SectionFive';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div>
        <SectionOne/>
        {/* <SectionTwo /> */}
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <WhatsAppButton phoneNumber="+573155355980" />
     
        </div>
    );

}

export default Home;




