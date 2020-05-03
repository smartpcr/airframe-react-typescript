import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { SidebarClose } from '../components/Sidebar/SidebarClose';
import { SidebarTrigger } from '../components/Sidebar/SidebarTrigger';
import { SidebarHideSlim } from '../components/Sidebar/SidebarHideSlim';
import { SidebarSection } from '../components/Sidebar/SidebarSection';
import { LogoThemed } from '../components/Logo/LogoThemed';

export const DefaultSidebar = () => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <SidebarClose>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </SidebarClose>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        
    </Sidebar>
);
