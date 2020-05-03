import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import PropTypes from 'prop-types';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import { IconWithBadge } from '../components/IconWithBadge/IconWithBadge';
import Badge from 'reactstrap/lib/Badge';
import { ExtendedDropdown } from '../components/ExtendedDropdown/ExtendedDropdown';
import { ExtendedDropdownSection } from '../components/ExtendedDropdown/ExtendedDropdownSection';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import Media from 'reactstrap/lib/Media';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';

/*eslint-disable */
const activityFeedIcons = [
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
        <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
        <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
        <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
        <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
    </span>
];
/*eslint-enable */

export interface INavbarActivityFeedProps {

}

const NavbarActivityFeed = (props: INavbarActivityFeedProps) => (
    <UncontrolledDropdown nav inNavbar { ...props }>
        <DropdownToggle nav>
            <IconWithBadge
                badge={ <Badge pill color="primary">6</Badge> }
            >
                <i className="fa fa-bell-o fa-fw" />
            </IconWithBadge>
        </DropdownToggle>
        <ExtendedDropdown right>
            <ExtendedDropdownSection className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Activity Feed</h6>
                <Badge pill>4</Badge>
            </ExtendedDropdownSection>

            <ExtendedDropdownSection list>
                <ListGroup>
                {
                    _.times(7, (index) => (
                        <ListGroupItem key={ index } action>
                            <Media>
                                <Media left>
                                    { activityFeedIcons[index%4] }
                                </Media>
                                <Media body>
                                    <span className="h6">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span> changed Description to &quot;{ faker.random.words() }&quot;
                                    <p className="mt-2 mb-1">
                                        { faker.lorem.sentence() }
                                    </p>
                                    <div className="small mt-2">
                                        { faker.date.past().toString() }
                                    </div>
                                </Media>
                            </Media>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>
            </ExtendedDropdownSection>

            <ExtendedDropdownSection className="text-center" tag={ Link} to="/apps/widgets">
                <div>See All Notifications</div>
                <i className="fa fa-angle-right fa-fw ml-2" />
            </ExtendedDropdownSection>
        </ExtendedDropdown>
    </UncontrolledDropdown>
);
NavbarActivityFeed.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarActivityFeed };
