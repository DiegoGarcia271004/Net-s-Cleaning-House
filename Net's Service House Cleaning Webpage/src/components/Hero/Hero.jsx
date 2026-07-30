import "./Hero.css";
import "react-multi-carousel/lib/styles.css";
import "../../fonts/fonts.css";
import img from "../../assets/senor_nunca_sucio.png"

const Hero = () => {  

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Net's Service <br /> House Cleaning</h1>
        <br /><br />
        <h3 className="hero-subtitle">Professional Cleaning Services for a Sparkling Home</h3>
      </div>
      <div className="img-container-hero">
        <img src={img} alt="image" className="mascot"/>
      </div>
    </section>
  );
};

export default Hero;
