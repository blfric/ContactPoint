import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { I18nextProvider } from 'react-i18next';
import { ExperienceRowComponent } from './';
import { Suspense } from 'react';
import i18n from 'providers/i18n';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { darkTheme, lightTheme } from 'Styling/themes';
import { ThemeProvider } from 'styled-components';
import { AppRoot } from 'AppRoot';
import { Companies } from './utils';

export type ComponentType = typeof ExperienceRowComponent;

const meta: Meta<typeof ExperienceRowComponent> = {
    title: 'Components/Experience Row',
    component: () => {
        return(
            <Suspense fallback={<p>Loading ....</p>}>
                <I18nextProvider i18n={i18n} >
                    <ExperienceRowComponent keyJob='bunkerMc' />
                </I18nextProvider>
            </Suspense>
        )
    },
    decorators: [withRouter, withThemeFromJSXProvider({
        themes: {
          light: lightTheme,
          dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles:  AppRoot,
      })]
};

export default meta;

type Story = StoryObj<typeof ExperienceRowComponent>;

const keyId: Companies = 'bunkerMc';
const keyIdLaPieza: Companies = 'laPieza';
const keyIdGoNet: Companies = 'goNet';
const keyIdFonYou: Companies = 'fonYou';

export const Default: Story = {
    name: 'Default',
    render: () => <ExperienceRowComponent keyJob={keyId} />,
};

export const LaPiezaCompany: Story = {
    name: 'La Pieza',
    render: () => <ExperienceRowComponent keyJob={keyIdLaPieza} />,
};

export const goNetCompany: Story = {
    name: 'GoNet',
    render: () => <ExperienceRowComponent keyJob={keyIdGoNet} />,
};

export const fonYouCompany: Story = {
    name: 'FonYou',
    render: () => <ExperienceRowComponent keyJob={keyIdFonYou} />,
};

