import laPiezaLogo from 'assets/companies/laPieza.png';
import bunkerMcLogo from 'assets/companies/bunkerMc.png';
import goNetLogo from 'assets/companies/goNet.png';
import fonYouLogo from 'assets/companies/fonyou.svg';

export type Companies = "bunkerMc" | "laPieza" | "goNet" | "fonYou";

export const CompaniesCollection: Companies[] = ['bunkerMc', 'laPieza', 'goNet', 'fonYou'];

export const companyLogos = {
    bunkerMc: {
        logo: bunkerMcLogo,
        bgColor: '#191840'
    },
    laPieza: {
        logo: laPiezaLogo,
        bgColor: '#303E46'
    },
    goNet: {
        logo: goNetLogo,
        bgColor: '#000000'
    },
    fonYou: {
        logo: fonYouLogo,
        bgColor: '#0C97AA'
    },
}
export const experiencesKeys = ["bunkerMc", "laPieza", "goNet", "fonYou"];