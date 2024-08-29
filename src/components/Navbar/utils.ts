import { To } from "react-router-dom";
import WhatsApp from "assets/icons/whatsapp_icon.png";
import Linkedin from "assets/icons/linkedin_icon.png";
import Phone from "assets/icons/phone_icon.png";
import Mail from "assets/icons/mail_icon.png";

export interface NavItems {
    className: string
    hClassName?: string
    keyT: string
    to: To
};

export interface SocialItems {
    src: string
    alt: string
    to: To
    type: 'mail' | 'link' | 'phone' | 'whatsapp'
}

export const navBarItems: NavItems[] = [
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkHome',
        to: '/'
    },
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkStack',
        to: '/stack'
    },
    /*{
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkLabs',
        to: '/labs'
    },*/
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkContact',
        to: '/contact'
    }
];

export const footerSocials: SocialItems[] = [
    {
        src: WhatsApp,
        alt: 'Whatsapp',
        to: '2382198709',
        type: 'whatsapp'
    },
    {
        src: Linkedin,
        alt: 'linkedin',
        to: 'https://www.linkedin.com/in/ricardo-blfl-0304/',
        type: 'link'
    },
    {
        src: Phone,
        alt: 'phone call',
        to: '522382198709',
        type: 'phone'
    },
    {
        src: Mail,
        alt: 'send mail',
        to: 'blancofloresricardo@gmail.com',
        type: 'mail'
    }
];