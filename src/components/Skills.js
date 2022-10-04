import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import CircularBar from "./CircularBar";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        minitablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Here are my Top and Prioritized Skills.
                            </p>
                            <Carousel
                                responsive={responsive}
                                // infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <CircularBar percentage="87" name="HTML" />
                                <CircularBar percentage="85" name="CSS" />
                                <CircularBar percentage="80" name="JAVASCRIPT" />
                                <CircularBar percentage="85" name="REACT JS" />
                                <CircularBar percentage="73" name="REACT NATIVE" />
                                <CircularBar percentage="80" name="MONGODB" />
                                <CircularBar percentage="75" name="NODE JS" />
                                <CircularBar percentage="65" name="EXPRESS JS " />
                                <CircularBar percentage="60" name="PHP" />
                                <CircularBar percentage="70" name="MY SQL" />
                                <CircularBar percentage="55" name="ANGULAR JS" />
                                <CircularBar percentage="69" name="J-QUERY" />
                                <CircularBar percentage="89" name="SCSS" />
                                <CircularBar percentage="74" name="TAILWIND" />
                                <CircularBar percentage="78" name="C" />
                                <CircularBar percentage="75" name="JAVA & JAVA-FX" />
                                <CircularBar percentage="85" name="GIT & GITHUB" />
                                <CircularBar percentage="83" name="DATA STRUCTURE" />
                                <CircularBar percentage="80" name="EXCEL" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Error"
            />
            <img
                className="background-image-left secimg"
                src={colorSharp}
                alt="Error"
            />
            
        </section>
    );
};
