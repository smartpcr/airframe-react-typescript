import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import './float-grid.scss';
import { FloatGridContext } from './FloatGridContext';

export interface IGridProps {
    active: boolean;
    children: ReactElement[];
    fluid: boolean;
    rowHeight: number;
    className: string;
}

export interface IGridState {
    gridSize: { w: number; h: number };
    gridReady: boolean;
}

export class Grid extends React.Component<IGridProps, IGridState> {
    _gridRef: React.RefObject<HTMLDivElement>;
    _resizeDebounceTimeout: number;

    constructor(props: IGridProps) {
        super(props);
        this._gridRef = React.createRef();
        this._resizeDebounceTimeout = 0;
        this.state = {
            gridSize: { w: 0, h: 0 },
            gridReady: false,
        };
    }

    componentDidMount() {
        if (this._gridRef.current) {
            this.setState({
                gridSize: {
                    w: this._gridRef.current.clientWidth,
                    h: this._gridRef.current.clientHeight
                }
            });
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this._resizeHandler);
        }
    }

    componentDidUpdate(nextProps: IGridProps) {
        // HACK
        if (
            typeof window !== 'undefined' &&
            nextProps.fluid !== this.props.fluid
        ) {
            window.dispatchEvent(new Event('resize'));
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }

    render() {
        const { active, children, fluid, className, rowHeight, ...otherProps } = this.props;
        const { gridSize } = this.state;
        const modifiedChildren = React.Children.map(children, (child: ReactElement) => (
            React.cloneElement(child, {
                ...otherProps,
                active,
                gridSize
            })
        ));

        const floatWrapClasses = classNames({
            ['float-grid-parent__static']: !fluid
        }, className, 'float-grid-parent');

        return(
            <FloatGridContext.Provider
                value={{
                    gridUnitsToPx: (w: number, h: number) => {
                        return {
                            wPx: w / 12 * gridSize.w,
                            hPx: h * rowHeight
                        }
                    },
                    active,
                    gridReady: this.state.gridReady,
                    setGridReady: () => { this.setState({ gridReady: true }) }
                }}
            >
                {
                    active ? (
                        <div
                            className={ floatWrapClasses }
                            ref={ this._gridRef }
                        >
                            { modifiedChildren }
                        </div>
                    ) : (
                        <div ref={ this._gridRef }>
                            <Container fluid={ fluid } className={ className } { ...otherProps }>
                                { modifiedChildren }
                            </Container>
                        </div>
                    )
                }
                
            </FloatGridContext.Provider>
        );
    }

    _resizeHandler = () => {
        clearInterval(this._resizeDebounceTimeout);

        this._resizeDebounceTimeout = window.setTimeout(() => {
            if (this._gridRef.current) {
                this.setState({
                    gridSize: {
                        w: this._gridRef.current.clientWidth,
                        h: this._gridRef.current.clientHeight
                    }
                });
            }
        }, 1000 / 60 * 10); //Every 10 frames debounce
    }
}
