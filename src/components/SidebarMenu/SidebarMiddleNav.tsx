import React from "react";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenuItem
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
            <SidebarMenuItem title="Analytics" to='/dashboards/analytics' exact />
            <SidebarMenuItem title="Projects" to='/dashboards/projects' exact />
            <SidebarMenuItem title="System" to='/dashboards/system' exact />
            <SidebarMenuItem title="Monitor" to='/dashboards/monitor' exact />
            <SidebarMenuItem title="Financial" to='/dashboards/financial' exact />
            <SidebarMenuItem title="Stock" to='/dashboards/stock' exact />
            <SidebarMenuItem title="Reports" to='/dashboards/reports' exact />
        </SidebarMenuItem>
        <SidebarMenuItem
            icon={<i className="fa fa-fw fa-th"></i>}
            title="Widgets"
            to='/widgets'
        />
    </SidebarMenu>
)