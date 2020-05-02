import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { Layout, IIcon } from './Layout';


const favIcons: IIcon[] = [
    { rel: 'icon', type: 'image/x-icon', href: require('../assets/images/favicons/favicon.ico') },
    { rel: 'apple-touch-icon', sizes: '180x180', href: require('../assets/images/favicons/apple-touch-icon.png') },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../assets/images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../assets/images/favicons/favicon-16x16.png') }
];

class AppLayout extends React.Component {
    public render() {
        return (
            <ThemeProvider initialStyle="light" initialColor="primary">
                <Layout sidebarSlim favIcons={favIcons}>
                    
                </Layout>
            </ThemeProvider>
        )
    }
}

export default AppLayout;