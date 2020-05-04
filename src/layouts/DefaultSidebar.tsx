import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { SidebarClose } from '../components/Sidebar/SidebarClose';
import { SidebarTrigger } from '../components/Sidebar/SidebarTrigger';
import { SidebarHideSlim } from '../components/Sidebar/SidebarHideSlim';
import { SidebarSection } from '../components/Sidebar/SidebarSection';
import { LogoThemed } from '../components/Logo/LogoThemed';
import { SidebarMobileFluid } from '../components/Sidebar/SidebarMobileFluid';
import { SidebarTopA } from '../components/Sidebar/SidebarTopA';
import { SidebarBottomA } from '../components/Sidebar/SidebarBottomA';
import { SidebarMiddleNav } from '../components/SidebarMenu/SidebarMiddleNav';

export const DefaultSidebar = () => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <SidebarClose>
            <SidebarTrigger tag={ 'a' } href="">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </SidebarClose>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        
        { /* START SIDEBAR: Only for Desktop */ }
        <SidebarHideSlim>
            <SidebarSection>
                <Link to="/" className="sidebar__brand">
                    <LogoThemed checkBackground />
                </Link>
            </SidebarSection>
        </SidebarHideSlim>
        { /* END SIDEBAR: Only for Desktop */}
        
        { /* START SIDEBAR: Only for Mobile */ }
        <SidebarMobileFluid>
            <SidebarTopA />
            
            <SidebarSection fluid cover>
                { /* SIDEBAR: Menu */ }
                <SidebarMiddleNav />
            </SidebarSection>

            <SidebarBottomA />
        </SidebarMobileFluid>
        { /* END SIDEBAR: Only for Mobile */ }
    </Sidebar>
);
