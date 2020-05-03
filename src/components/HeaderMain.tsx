import React from 'react';
import PropTypes from 'prop-types';

export interface IHeaderMainProps {
    title: string;
    subTitle: JSX.Element;
    className: string;
}

const HeaderMain = (props: IHeaderMainProps) => (
    <React.Fragment>
        { /* START H1 Header */}
        <div className={` d-flex ${ props.className }` }>
            <h1 className="display-4 mr-3 mb-0 align-self-start">
                { props.title }
            </h1>
        </div>
        { /* END H1 Header */}
    </React.Fragment>
)
HeaderMain.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.node,
    className: PropTypes.string
};
HeaderMain.defaultProps = {
    title: "Waiting for Data...",
    subTitle: "Waiting for Data...",
    className: "my-4"
};

export { HeaderMain };
