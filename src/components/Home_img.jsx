import home_img from '../images/home_img.jpg';
import about_img from '../images/about_img.jpg';

export default function Header(){
  const currentRoute = window.location.pathname;

  return (
      <div className="home-img">
        {currentRoute === '/' ? <><img src={home_img} alt="background"/><h1 className="home-img-txt">Chez vous, partout et ailleurs</h1></> : <><img src={about_img} alt="background" className="home-responsive"/></>}
      </div>
  );
}