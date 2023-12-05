import image from './image.jpeg';
import linkedin from './linkedin.jpg';
import github from './github.png';
import html from './html.png';
import css from './css.jpeg';
import c from './c.jpeg';
import python from './Python.png';
import location from './location.jpeg';
const Home = () => {
    const Linkedin="https://www.linkedin.com/in/ritesh-biradar";
    const Github="https://github.com/RiteshBiradar";
    

    return (
        <div className="home">
            <div className="myself">
            <h1>Front-End Developer
            <div className="slider"></div>
            </h1>
                <p>Hi, I'm Ritesh Biradar I'm a passionate and dedicated Front-End Developer ,Enginner based in Hyderabad,Telangana.<img src={location} alt='Location'></img></p>
                <div className="profilelink">
                <a href={Linkedin}><img src={linkedin} alt='LinkedIn'/></a>
                <a href={Github}><img src={github} alt='GitHub' ></img></a>
                </div>
                </div>
                <div className="myimage"><img src={image} alt='Myimage'/></div>
            <div className="tech">
                    <h3>Tech Stack |      </h3>
                    <div className="language">
                    <img src={html} alt='Html'></img>
                    <img src={css} alt='CSS'></img>
                    <img src={c} alt='C'></img>
                    <img src={python} alt='Python'></img>
                    </div>
            </div>

        </div>
      );
}
 export default Home;