import React from 'react';
import { Consumer } from './ThemeContext';

const ThemeClass = (children: (themeClass: string) => any, color: string, style: string) => {
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

