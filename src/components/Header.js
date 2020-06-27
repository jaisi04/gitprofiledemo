import React from 'react';
import styled from 'styled-components';
import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';

const Head = styled.div`
    display: flex;
    flex-direction: row;
    width: 100;
    min-height: 48px;
    border-bottom: 1px solid #ccc;
`;


const TabGroup = styled.div`
    flex: 3;
`;

const AvatarTab = styled.div`
    flex: 1;
`;

const Tab = styled.span`
    font-size: 14px;
    padding: 8px 16px;
    line-height: 30px;
    ${props => props.selected && 'border-bottom: 2px solid rgba(209,213,218,0)'};
    > svg {
        margin-right: 4px;
    }
`;

const defaultTabs = [
    {icon: BookIcon, title: 'Overview'},
    {icon: RepoIcon, title: 'Repositories', selected: true},
    {icon: ProjectIcon, title: 'Projects'},
];

const Header = (props) => {
    return <Head>
        <AvatarTab>Avatar</AvatarTab>
        <TabGroup>
            {defaultTabs.map(tab => (
                <Tab key={tab.title} selected={tab.selected}><tab.icon size={16} />{tab.title}</Tab>
            ))}
        </TabGroup>
    </Head>
}

export default Header;