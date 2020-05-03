import React from 'react';
import { PageConfigContext } from './PageConfigContext';

export const withPageConfig = (Component: any) => {
    const WithPageConfig = (props: any) => (
        <PageConfigContext.Consumer>
        {
            (pageConfig) => <Component pageConfig={ pageConfig } { ...props } />   
        }
        </PageConfigContext.Consumer>
    );
    return WithPageConfig;
};
