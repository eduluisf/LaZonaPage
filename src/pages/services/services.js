import React from "react";
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import imageBkg from  "../../assets/background.png"
const Services = () => {
    return (

<div>
        
        <ServiceBanner title={"Lorem ipsum dolor"}  backgroundImage={imageBkg} description={"Lorem ipsum dolor sit amet consectetur. Sed risus mi massa congue consequat. Arcu lectus rhoncus nam diam mauris nibh blandit orci. Urna sit elementum aliquam blandit et ultrices. Adipiscing turpis consequat tristique nam. Volutpat adipiscing pellentesque tristique eu a." }/>

        <WhatsAppButton phoneNumber="+573155355980" />
</div>
    );

}

export default Services;




