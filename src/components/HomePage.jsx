import Intro from "./Intro";
import { ImageSlider } from "./pictureSlider/imageSlider";
import { SliderData } from "./pictureSlider/SliderData";

export default function HomePage() {
    return (
        <div>
            <h1 className='hello'>Hi, I'm Shane</h1>
            <ImageSlider slides={SliderData} />
            <Intro />
        </div>
    );
}