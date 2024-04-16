import { To } from "react-router-dom"

export interface NavItems {
    className: string
    hClassName?: string
    keyT: string
    to: To
}

export const navBarItems: NavItems[] = [
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkStack',
        to: '/stack'
    },
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkLabs',
        to: '/labs'
    },
    {
        className: 'go__link',
        hClassName: 'res__go__link',
        keyT: 'linkContact',
        to: '/contact'
    }
]