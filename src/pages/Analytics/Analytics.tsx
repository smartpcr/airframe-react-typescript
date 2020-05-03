import React from "react";
import * as _ from "lodash";

export type LayoutDefinition = { [key: string]: { h: number; md?: number, minH?: number, maxH?: number, minW?: number, maxW?: number } };

const LAYOUT: LayoutDefinition = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 9, minH: 7 },
    'traffic-channels': { md: 6, h: 6 },
    'sessions': { md: 6, h: 6, maxH: 9, minW: 3 },
    'spend': { md: 6, h: 7 },
    'website-performance': { md: 6, h: 11 },
    'organic-traffic': { md: 6, h: 10 }
};

import classes from './Analytics.scss';
import Container from "reactstrap/lib/Container";
import { HeaderMain } from "../../components/HeaderMain";
import { Grid } from "../../components/FloatGrid/Grid";

export interface ISessionByDeviceProps {
    title: JSX.Element;
    color: string;
    valuePercent: string;
    value: string;
}

const SessionByDevice = (props: ISessionByDeviceProps) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);

export interface IAnalyticsProps {

}

export interface IAnalyticsState {
    layouts: LayoutDefinition;
}

export class Analytics extends React.Component<IAnalyticsProps, IAnalyticsState> {
    constructor(props: IAnalyticsProps) {
        super(props);
        this.state = {
            layouts: _.clone(LAYOUT)
        };
    }

    render() {
        const { layouts } = this.state;

        return (
            <React.Fragment>
                <Container fluid={ false }>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                            title="Analytics"
                            className="mt-0"
                        />
                        
                    </div>
                </Container>

                
            </React.Fragment>
        );
    }
}