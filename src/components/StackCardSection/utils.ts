import FrontendIcon from "assets/StackCardsIcons/frontend.png";
import BackendIcon from "assets/StackCardsIcons/backend.png";
import TestingIcon from "assets/StackCardsIcons/test.png";
import DatabaseIcon from "assets/StackCardsIcons/database.png";
import SoftwareIcon from "assets/StackCardsIcons/software.png";
import GitIcon from "assets/StackCardsIcons/git.png";
import DevOpsIcon from "assets/StackCardsIcons/devops.png";

export interface CardStackTypes {
    cardName: string;
    elements: Array<string>;
    urlIcon: string
}

export const StackCards: CardStackTypes[] = [
    {
        cardName: 'Frontend',
        elements: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'NextJs',
            'TypeScript',
            'ViteJs',
            'Webpack',
            'BootStrap',
            'Styled-Components',
            'MaterialUI',
            'AntDesign',
            'Sass',
            'Redux',
            'Zustand',
            'Context',
            'Axios'
        ],
        urlIcon: FrontendIcon
    },
    {
        cardName: 'Testing',
        elements: [
            'Jest',
            'Vitest',
            'Enzyme',
            'React Testing',
            'StoryBook'
        ],
        urlIcon: TestingIcon
    },
    {
        cardName: 'Backend',
        elements: [
            'NodeJs',
            'ExpressJs',
            'GCP',
            'PHP',
            'Slim Framework',
            'PostMan',
            'Firebase'
        ],
        urlIcon: BackendIcon
    },
    {
        cardName: 'stackDB',
        elements: [
            'Mongo DB',
            'Firestore',
            'MySQL',
            'SQLite',
            'JSON',
        ],
        urlIcon: DatabaseIcon
    },
    {
        cardName: 'stackVersionControl',
        elements: [
            'Git',
            'GitLab',
            'GitHub',
            'Bitbucket'
        ],
        urlIcon: GitIcon
    },
    {
        cardName: 'Software',
        elements: [
            'Linux',
            'Windows',
            'MacOs',
            'VS Code',
            'WebStorm',
            'Office Software',
            'ChatGPT',
            'Gemini',
            'Jira',
            'Copilot'
        ],
        urlIcon: SoftwareIcon
    },
    {
        cardName: 'DevOps',
        elements: [
            'Jenkins',
            'Docker',
            'Kubernetes'
        ],
        urlIcon: DevOpsIcon
    }
]