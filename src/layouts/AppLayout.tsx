import React, { ReactElement } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { Layout, IIcon } from './Layout';
import { LayoutNavbar } from './LayoutNavbar';
import { LayoutSidebar } from './LayoutSidebar';
import { LayoutContent } from './LayoutContent';
import { DefaultNavbar } from './DefaultNavbar';
import { DefaultSidebar } from './DefaultSidebar';
import { PageConfigContext } from './PageConfigContext';
import { ThemeSelector } from './theme/ThemeSelector';


const favIcons: IIcon[] = [
    { rel: 'icon', type: 'image/x-icon', href: require('../assets/images/favicons/favicon.ico') },
    { rel: 'apple-touch-icon', sizes: '180x180', href: require('../assets/images/favicons/apple-touch-icon.png') },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../assets/images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../assets/images/favicons/favicon-16x16.png') }
];

export interface IAppLayoutProps {
    children: ReactElement;
}

class AppLayout extends React.Component<IAppLayoutProps> {
    public render() {
        const { children } = this.props;
        
        return (
            <ThemeProvider initialStyle="light" initialColor="primary">
                <Layout sidebarSlim favIcons={favIcons}>
                    { /* --------- Navbar ----------- */ }
                    <LayoutNavbar layoutPartName="navbar">
                        <DefaultNavbar/>
                    </LayoutNavbar>
                    { /* -------- Sidebar ------------*/ }
                    <LayoutSidebar layoutPartName="sidebar">
                        <DefaultSidebar />
                    </LayoutSidebar>

                    { /* -------- Content ------------*/ }
                    <LayoutContent layoutPartName="content">
                        { children }
                    </LayoutContent>

                    { /* -- Theme Selector (DEMO) ----*/ }
                    <PageConfigContext.Consumer>
                    {
                        ({ sidebarHidden, navbarHidden }) => (
                            <ThemeSelector styleDisabled={ sidebarHidden && navbarHidden } style="light" color="primary" />
                        )
                    }
                    </PageConfigContext.Consumer>
                </Layout>
            </ThemeProvider>
        )
    }
}

export default AppLayout;