import React, { useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';
import { navBarItems } from './utils';
import { useTranslation } from 'react-i18next';
import { HandleInt, NavBarStyled, SelectOptions, HamburguerButton, ResponsiveMenu, NavIcon } from './NavBarStyles';
import IconInternational from 'assets/intIcon.png';
import NavBarIcon from 'assets/logoPortfolio.png';
import IconSelect from 'assets/selectIcon.png';

export const NavBar = () => {
    const [state, setState] = useState(false);
    const [menu, handleMenu] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const goLink = (route: To, e: React.MouseEvent) => {
        e.preventDefault();
        navigate(route);
    }

    const handleLang = (lng: string): void => {
        i18n.changeLanguage(lng)
    }

    const handleSelect = () => {
        setState(prevState => !prevState)
    }

    return(
        <NavBarStyled $openMenu={menu}>
            <NavIcon src={NavBarIcon} />
            <ResponsiveMenu $openMenu={menu}>
                {navBarItems.map(item => (
                    <a
                        key={item.keyT}
                        className={`${item.className}${location.pathname === item.keyT ? '__active' : ''}`}
                        onClick={(e) => goLink(item.to, e)}
                    >
                        {t(item.keyT)}
                    </a>)
                )}
                <HandleInt $show={state}>
                    <label onClick={handleSelect}> 
                        {t('currentLng')}
                        <img alt='international_switch' src={IconSelect}/>
                        <SelectOptions $show={state} >
                            <span onClick={() => handleLang('en')}>{t('english')}</span>
                            <span onClick={() => handleLang('es')}>{t('spanish')}</span>
                        </SelectOptions>
                    </label>
                    <img alt='international logo' src={IconInternational}/>
                </HandleInt>
            </ResponsiveMenu>
            <HamburguerButton $openMenu={menu} onClick={() => {handleMenu(prevState => !prevState)}}>
                <span />
                <span />
            </HamburguerButton>
        </NavBarStyled>
    )
};