import React, { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { MenuContext } from './MenuContext';
import uuid from "uuidv4";
import { IMenuEntry } from './IMenuEntry';

export interface ISidebarMenuItemLinkProps {
    to?: string | null;
    href?: string | null;
    active?: boolean;
    children: ReactNode;
    classBase?: string;
    onToggle(): void;
}

/**
 * Renders a collapse trigger or a ReactRouter Link 
 */
const SidebarMenuItemLink = (props: ISidebarMenuItemLinkProps) => (
    (props.to || props.href) ? (
        props.to ? (
            <Link to={ props.to } className={`${props.classBase}__entry__link`}>
                { props.children }
            </Link>
        ) : (
            <a
                href={ props.href! }
                target="_blank"
                rel="noopener noreferrer"
                className={`${props.classBase}__entry__link`}
            >
                { props.children }
            </a>
        )
        
    ) : (
        <a
            href="#"
            className={`${props.classBase}__entry__link`}
            onClick={ () => props.onToggle() }
        >
            { props.children }
        </a>
    )
)

export interface ISidebarMenuItemProps {
    // MenuContext props
    entries?: any;
    // Provided props
    parentId?: string;
    children?: ReactElement[];
    isSubNode?: boolean;
    currentUrl?: string;
    slim?: boolean;
    // User props
    icon?: ReactElement;
    title?: string | ReactElement;
    to?: string;
    href?: string;
    exact?: boolean;
    noCaret?: boolean;
    addEntry?(entry: any): void;
    updateEntry?(id: string, entry: any): void;
    removeEntry?(id: string): void;
}

/**
 * The main menu entry component
 */
export class SidebarMenuItem extends React.Component<ISidebarMenuItemProps> {
    id: string;
    
    constructor(props: ISidebarMenuItemProps) {
        super(props);

        this.id = "id";
    }

    componentDidMount() {
        const entry: IMenuEntry = {
            id: this.id,
            parentId: this.props.parentId,
            exact: !!this.props.exact
        };
        
        if (this.props.to) {
            entry.url = this.props.to;
        }

        this.props.addEntry && this.props.addEntry(entry);
    }

    componentWillUnmount() {
        this.props.removeEntry && this.props.removeEntry(this.id);
    }

    getEntry() {
        return this.props.entries[this.id];
    }

    toggleNode() {
        const entry = this.getEntry();

        this.props.updateEntry && this.props.updateEntry(this.id, { open: !entry.open });
    }

    render() {
        const entry = this.getEntry();
        const classBase = this.props.isSubNode ? "sidebar-submenu" : "sidebar-menu";
        const itemClass = classNames(`${classBase}__entry`, {
            [`${classBase}__entry--nested`]: !!this.props.children,
            'open': entry && entry.open,
            'active': entry && entry.active
        });

        return (
            <li
                className={classNames(itemClass, {
                    'sidebar-menu__entry--no-caret': this.props.noCaret,
                })}
            >
                <SidebarMenuItemLink
                    to={ this.props.to || null }
                    href={ this.props.href || null }
                    onToggle={ this.toggleNode.bind(this) }
                    classBase={ classBase }
                >
                    {
                        this.props.icon && React.cloneElement(this.props.icon, {
                            className: classNames(
                                this.props.icon.props.className,
                                `${classBase}__entry__icon`
                            )
                        })
                    }
                    {
                        typeof this.props.title === 'string' ?
                            <span>{ this.props.title }</span> :
                            this.props.title
                    }
                </SidebarMenuItemLink>
                {
                    this.props.children && (
                        <ul className="sidebar-submenu">
                        {
                            React.Children.map(this.props.children, (child: ReactElement) => (
                                <MenuContext.Consumer>
                                {
                                    (ctx) => React.cloneElement(child, {
                                        isSubNode: true,
                                        parentId: this.id,
                                        currentUrl: this.props.currentUrl,
                                        slim: this.props.slim,
                                        ...ctx
                                    })
                                }
                                </MenuContext.Consumer>
                            ))
                        }
                        </ul>
                    )
                }
            </li>
        );
    }
}
