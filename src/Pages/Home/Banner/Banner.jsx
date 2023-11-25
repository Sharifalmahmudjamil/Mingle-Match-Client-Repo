import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div >
          
            <Carousel className="text-center">
        <div>
            <img src="https://i.ibb.co/FWVxCzJ/7763972-3744582.jpg"/>
           
        </div>
        <div>
            <img src='https://i.ibb.co/tpJs998/7763973-3744579.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/3dJbhhR/2927850-415566-PDIUVC-333.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/nj5n2J6/5151508-51497.jpg' />
           
        </div>
       
        
    </Carousel>

        </div>
    );
};

export default Banner;