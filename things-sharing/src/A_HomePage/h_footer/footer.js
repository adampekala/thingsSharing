import './footer.scss';
import facebookIcon from './images/Facebook.png'
import instagramIcon from './images/Instagram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <small className='footerCopyright'>Copyright by Coders Lab</small>
            <div className='footerSocialMediaLinks'>
                <a href='https://www.facebook.com' alt='facebook'><img src={facebookIcon} alt='facebook'/></a>
                <a href='https://www.instagram.com' alt='instagram'><img src={instagramIcon} alt='instagram'/></a>
            </div>
        </div>
    )
}

export default Footer;