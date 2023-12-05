import location from './location.jpeg';
import about from './about.jpeg';
const AboutMe = () => {
    return ( 
        <div className="about">
        <div className="aboutme">
            <h2>ABOUT ME :</h2><br></br>
            <p>Hi, I'm Ritesh Biradar I'm a passionate and dedicated Front-End Developer ,Enginner based in Hyderabad,Telangana.<img src={location} alt='Location'></img> I love problem-solving, have a strong interest in DSA, and also explore the hacking field. Gaming and chess are my hobbies. I'm passionate about creating clean, interactive websites and thrive in team collaborations.
</p>
        </div>
        <div className="image">
            
            <img src={about} alt='Laptop'></img>
        </div>
        </div>
     );
}
 
export default AboutMe;