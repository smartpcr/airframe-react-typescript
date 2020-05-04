import React from 'react';
import { SidebarHideSlim } from './SidebarHideSlim';
import { SidebarSection } from './SidebarSection';
import { SidebarShowSlim } from './SidebarShowSlim';
import Button from 'reactstrap/lib/Button';
import PopoverBody from 'reactstrap/lib/PopoverBody';
import { FooterText } from '../footer/FooterText';
import { FooterAuth } from '../footer/FooterAuth';
import { UncontrolledPopover } from 'reactstrap';


const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Desktop */ }
        <SidebarHideSlim>
            <SidebarSection>
                <FooterAuth className="text-muted" />
            </SidebarSection>
        </SidebarHideSlim>
        { /* END Desktop */ }

        { /* START Slim Only */ }
        <SidebarShowSlim>
            <SidebarSection className="text-center">
                { /* Footer Text as Tooltip */ }
                <Button
                    id="UncontrolledSidebarPopoverFooter"
                    color="link"
                    className="sidebar__link p-0 mt-3"
                >
                    <i className="fa fa-fw fa-question-circle-o"></i>
                </Button>
                <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                    <PopoverBody>
                        <FooterText />
                    </PopoverBody>
                </UncontrolledPopover>
            </SidebarSection>
        </SidebarShowSlim>
        { /* END Slim Only */ }
    </React.Fragment>
)

export { SidebarBottomA };
