import heroImg from '../../assets/hero.png'
function Hero() {
  return (
    <section id="home" className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
      <h2>Building the future through innovation.</h2>
    </section>
  );
}

export default Hero;