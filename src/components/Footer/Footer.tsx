import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';/*<a href="https://www.flaticon.es/iconos-gratis/linkedin" title="linkedin iconos">Linkedin iconos creados por Freepik - Flaticon</a>*/
import { FooterComponent } from './FooterStyled';
import Logo from 'assets/logoPortfolio.png';
import { SocialItems, footerSocials, navBarItems } from 'components/Navbar';

export const renderSocialItem = (data: SocialItems, children: React.ReactElement) => {
    switch(data.type) {

        case 'link':
            return <Link to={data.to} key={data.type}>
                        {children}
                    </Link>;

        case 'mail':
            return <Link to={`mailto:${data.to}`} key={data.type}>
                        {children}
                    </Link>;

        case 'phone':
            return <Link to={`tel:${data.to}`} key={data.type}>
                        {children}
                    </Link>;

        case 'whatsapp': 
            return <Link to={`https://api.whatsapp.com/send?phone=${data.to}&text=Hi!`} key={data.type}>
                {children}
            </Link>
    }
};

export const Footer = () => {
    const { t } = useTranslation();

    return(
        <FooterComponent>
            <div className='footer__links'>
                <div className='links__section'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={Logo} alt='ricardo blanco portfolio'/>
                        </Link>
                    </div>
                    <div className='links__website'>
                        {navBarItems.map((item, index) => {
                            if(item.keyT !== 'linkHome')
                            return(<div key={item.keyT + index} className='link__item'>
                                <Link to={item.to} children={t(item.keyT)}/>
                                <p>{t(`${item.keyT}Footer`)}</p>
                            </div>)
                        })}
                    </div>
                </div>
                <div className='social__links'>
                    {
                        footerSocials.map(social => (
                            renderSocialItem(social, <img className='social__icon' {...social} />)
                        ))
                    }
                </div>
            </div>
            <div className='copy__rights'>
                <p>&copy;{t('FooterCopyRights')}</p>
            </div>
        </FooterComponent>
    )
};