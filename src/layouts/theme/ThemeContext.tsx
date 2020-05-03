import React from "react";
import { IThemeProviderState } from "./ThemeProvider";

export interface IThemeContext extends IThemeProviderState {
    onChangeTheme?(state: IThemeProviderState): void;
}

const { Provider, Consumer } = React.createContext<IThemeContext>({style: "primary", color: "primary"});

export { Provider, Consumer };