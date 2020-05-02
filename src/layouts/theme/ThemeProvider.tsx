import React from "react";
import { Provider } from "./ThemeContext";

export interface IThemeProviderProps {
    initialStyle: string;
    initialColor: string;
}

export interface IThemeProviderState {
    style: string;
    color: string;
}

export class ThemeProvider extends React.Component<IThemeProviderProps, IThemeProviderState> {
    constructor(props: IThemeProviderProps) {
        super(props);
        this.state = {
            style: "light",
            color: "primary"
        };
    }

    componentDidMount() {
        const { initialStyle, initialColor } = this.props;

        if (initialStyle) {
            this.setState({ style: initialStyle });
        }
        if (initialColor) {
            this.setState({ color: initialColor });
        }
    }

    onChangeTheme(themeState: IThemeProviderState) {
        this.setState(themeState);
    }

    render() {
        const { children } = this.props;
        
        return (
            <Provider
                value={{
                    ...this.state,
                    onChangeTheme: this.onChangeTheme.bind(this)
                }}
            >
                { children }
            </Provider>
        );
    }
}