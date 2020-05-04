import React, { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';
import classNames from 'classnames';
import { MenuContext } from './MenuContext';
import { withPageConfig } from '../../layouts/withPageConfig';
import { IMenuEntry } from './IMenuEntry';

export interface ISidebarMenuProps {
    children: ReactElement[];
    currentUrl?: string;
    slim?: boolean;
    location?: any;
    pageConfig?: any;
    disabled?: boolean;
}

export interface ISidebarMenuPropsState {
    entries: any;
}

class SidebarMenu extends React.Component<RouteComponentProps<any> & ISidebarMenuProps, ISidebarMenuPropsState> {
    
    containerRef: React.RefObject<HTMLUListElement>;
    entries: any;

    constructor(props: RouteComponentProps<any> & ISidebarMenuProps) {
        super(props);

        this.state = {
            entries: this.entries = { }
        };

        this.containerRef = React.createRef();
    }

    addEntry(entry: IMenuEntry) {
        this.setState({
            entries: this.entries = {
                ...this.entries,
                [entry.id]: {
                    open: false,
                    active: false,
                    ...entry
                }
            }
        });
    }

    updateEntry(id: string, stateMods: IMenuEntry) {
        this.setState({
            entries: this.entries = {
                ...this.state.entries,
                [id]: {
                    ...this.state.entries[id],
                    ...stateMods
                }
            }
        });
    }

    removeEntry(id: string) {
        // eslint-disable-next-line no-unused-vars
        const { [id]: toRemove, ...rest } = this.state.entries;
        this.setState({ entries: this.entries = rest });
    }

    setActiveEntries(openActive = false) {
        const activeId = (childEntry: any, entries: any, previous: string[] = []): string[] => {
            if (childEntry.parentId) {
                const parentEntry = entries[childEntry.parentId];
                const activeIds = [...previous, parentEntry.id];
                return activeId(parentEntry, entries, activeIds);
            }
            return previous;
        }
        
        const activeChild = _.find(this.state.entries, (entry) => {
            const { pathname } = this.props.location;

            const noTailSlashLocation = pathname[pathname.length - 1] === '/' && pathname.length > 1 ?
                pathname.replace(/\/$/, '') : pathname;

            return entry.exact ?
                entry.url === noTailSlashLocation :
                _.includes(noTailSlashLocation, entry.url)
        });

        if (activeChild) {
            const activeEntries = [...activeId(activeChild, this.entries), activeChild.id];

            this.setState({
                entries: this.entries = _.mapValues(this.entries, (entry) => {
                    const isActive = _.includes(activeEntries, entry.id);

                    return {
                        ...entry,
                        active: isActive,
                        open: openActive ? (!entry.url && isActive) : entry.open
                    };
                })
            });
        }
    }

    componentDidUpdate(prevProps: ISidebarMenuProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setActiveEntries();
        }
    }

    render() {
        const isSlim = this.props.slim || (
            this.props.pageConfig.sidebarSlim &&
            this.props.pageConfig.sidebarCollapsed && (
                this.props.pageConfig.screenSize === 'lg' ||
                this.props.pageConfig.screenSize === 'xl'
            )
        );
        const sidebarMenuClass = classNames('sidebar-menu', {
            'sidebar-menu--slim': isSlim,
            'sidebar-menu--disabled': this.props.disabled
        });

        return (
            <MenuContext.Provider
                value={{
                    entries: this.state.entries,
                    addEntry: this.addEntry.bind(this),
                    updateEntry: this.updateEntry.bind(this),
                    removeEntry: this.removeEntry.bind(this)
                }}
            >
            <ul className={ sidebarMenuClass } ref={ this.containerRef }>
            {
                React.Children.map(this.props.children, (child: ReactElement) =>
                    <MenuContext.Consumer>
                    {
                        (ctx) => React.cloneElement(child, {
                            ...ctx,
                            currentUrl: this.props.location.pathname,
                            slim: isSlim
                        })
                    }
                    </MenuContext.Consumer>
                )
            }
            </ul>
            </MenuContext.Provider>
        )
    }
}

const RouterSidebarMenu = withPageConfig(withRouter(SidebarMenu));

export {
    RouterSidebarMenu as SidebarMenu
};
