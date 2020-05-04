import React, { ReactElement } from 'react';
import classNames from 'classnames';

export interface ISidebarContentProps {
    children: ReactElement[];
    slim?: boolean;
    collapsed?: boolean;
    animationsDisabled?: boolean;
    pageConfig?: any;
}

export interface ISidebarContentState {
    entryAnimationFinished: boolean;
}

export class SidebarContent extends React.Component<ISidebarContentProps, ISidebarContentState> {
    sidebarRef: React.RefObject<HTMLDivElement>;

    constructor(props: ISidebarContentProps) {
        super(props);

        this.state = {
            entryAnimationFinished: false,
        };
        this.sidebarRef = React.createRef();
    }

    render() {
        const {
            animationsDisabled,
            collapsed,
            pageConfig,
            slim,
            children,
        } = this.props;

        const sidebarClass = classNames('sidebar', {
            'sidebar--slim': slim || pageConfig.sidebarSlim,
            'sidebar--collapsed': collapsed || pageConfig.sidebarCollapsed,
        });

        return (
            <div className={ sidebarClass } ref={ this.sidebarRef }>
                { children }
            </div>
        );
    }
}