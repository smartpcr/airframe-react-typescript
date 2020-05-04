import React, { ReactElement } from 'react'

export type ILayout = ReactElement & { layoutPartName: string };

export interface ILayoutProps {
    children: ReactElement;
    layoutPartName: string;
}

export interface ITargetType {
    layoutPartName: string;
}

const LayoutContent = (props: ILayoutProps) => {
    const element = (
        <div className="layout__content">
            {props.children}
        </div>
    );
    return element;
};

export { LayoutContent };