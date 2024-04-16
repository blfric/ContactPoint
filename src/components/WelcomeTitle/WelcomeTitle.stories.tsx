import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { I18nextProvider } from 'react-i18next';
import { WelcomeTitle } from './';
import { ReactNode, Suspense } from 'react';
import i18n from 'providers/i18n';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { darkTheme, lightTheme } from 'Styling/themes';
import { ThemeProvider } from 'styled-components';
import { AppRoot } from 'AppRoot';

const meta: Meta<typeof WelcomeTitle> = {
    title: 'Components/WelcomeComponent',
    component: (Story: ReactNode) => {
        return(
            <Suspense fallback={<p>Loading ....</p>}>
                <I18nextProvider i18n={i18n}>
                    {Story}
                </I18nextProvider>
            </Suspense>
        )
    },
    render: WelcomeTitle,
    decorators: [withRouter, withThemeFromJSXProvider({
        themes: {
          light: lightTheme,
          dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: AppRoot,
      })]
};

export default meta;

type Story = StoryObj<typeof WelcomeTitle>;

export const Default: Story = {
    render: () => <WelcomeTitle />,
};