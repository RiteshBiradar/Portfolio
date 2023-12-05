import down from './down.png';
import mail from './gmail.jpeg'
const Contact = () => {
    return (  
        <div className="contactme">
        <div className="headings">
            <h1>Contact me<img src={down} alt='DownEmoji'></img></h1>
            <p>Don't be shy <br></br>Hit me up</p>
        </div>
        <div className="contacts">
            <img src={mail} alt='EmailLogo'></img><p><b>riteshbiradar3434@gmail.com</b></p>
        </div>
        <div className="reserve" style={{color:"white"}}>
            <p><b>Copyright  &copy;2023 Ritesh Biradar.All rights are reserved</b></p>
        </div>
        </div>
    );
}
 
export default Contact;