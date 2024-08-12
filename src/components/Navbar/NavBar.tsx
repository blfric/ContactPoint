import React, { useContext, useEffect, useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';
import { navBarItems } from './utils';
import { useTranslation } from 'react-i18next';
import { HandleInt, NavBarStyled, SelectOptions, HamburguerButton, ResponsiveMenu, NavIcon } from './NavBarStyles';
import IconInternational from 'assets/intIcon.png';
import NavBarIcon from 'assets/logoPortfolio.png';
import IconSelect from 'assets/selectIcon.png';
import IconSelectRed from 'assets/selectIconRed.png';
import { ThemeContext } from 'providers/ThemeWrapper';
import { ThemeToggleButton } from './ThemeToggleButton';

export const NavBar = () => {
    const [state, setState] = useState(false);
    const [menu, handleMenu] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const goLink = (route: To, e: React.MouseEvent) => {
        e.preventDefault();
        navigate(route);
    };
    const { toggleTheme, currentTheme } = useContext(ThemeContext);

    const handleLang = (lng: string): void => {
        i18n.changeLanguage(lng)
    };

    const handleSelect = () => {
        setState(prevState => !prevState)
    };

    useEffect(() => {
        if(state) {
            setTimeout(() => {
                setState(false)
            }, 3000);
        }
    }, [state]);

    return(
        <NavBarStyled $openMenu={menu}>
            <NavIcon src={NavBarIcon} onClick={(e) => goLink('/', e)} />
            <ResponsiveMenu $openMenu={menu}>
                {navBarItems.map(item => (
                    <a
                        key={item.keyT}
                        className={`${item.className} ${location.pathname === item.to ? '__active' : ''}`}
                        onClick={(e) => goLink(item.to, e)}
                    >
                        {t(item.keyT)}
                    </a>)
                )}
                <HandleInt $show={state}>
                    <label onClick={handleSelect}> 
                        {t('currentLng')}
                        <img alt='international_switch' src={currentTheme === 'light' ? IconSelect : IconSelectRed}/>
                        <SelectOptions $show={state} >
                            <span onClick={() => handleLang('en')}>{t('english')}</span>
                            <span onClick={() => handleLang('es')}>{t('spanish')}</span>
                        </SelectOptions>
                    </label>
                    <img alt='international logo' src={IconInternational}/>
                </HandleInt>
                {<ThemeToggleButton darkTheme={currentTheme} toggleTheme={toggleTheme} />}
            </ResponsiveMenu>
            <HamburguerButton $openMenu={menu} onClick={() => {handleMenu(prevState => !prevState)}}>
                <span />
                <span />
            </HamburguerButton>
        </NavBarStyled>
    )
};