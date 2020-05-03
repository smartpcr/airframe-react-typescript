import React, { ReactElement } from 'react';
import { Consumer } from './ThemeContext';

export interface IThemeClassProps {
    children(themeClass: string): ReactElement;
    color: string;
    style: string;
}

const ThemeClass = (props: IThemeClassProps) => {
    const { children, style, color } = props;
    const layoutThemeClass = `layout--theme--${ style }--${ color }`;
    
    return children(layoutThemeClass);
};

const ContextThemeClass = (otherProps: any) =>
    <Consumer>
        {
            (themeState) => <ThemeClass {...{ ...themeState, ...otherProps }}/>
        }
    </Consumer>;

export { ContextThemeClass as ThemeClass };

