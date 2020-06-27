import React from 'react';
import styled from 'styled-components';
import { PeopleIcon, StarIcon, OrganizationIcon, MailIcon, LocationIcon } from '@primer/octicons-react';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.fd || 'column'};
`;

const Avatar = styled.img`
    margin-top:16px;
    border-radius: 100%;
    width: 9em;
    height: 9em;
`;

const FollowTabGroup = styled.div`
    display: flex;
    flex-dirextion: row;
    justify-content: space between;
    flex-wrap: wrap;
`;

const Tab = styled.span`
    font-size: 12px;
    padding: 4px;
    > svg {
        margin-right: 4px;
    }
`;

const Name = styled.span`
    margin-top: 8px;
    font-size: 24px;
    font-wight: 900;
`;

const UserName = styled.span`
    font size: 20px;
    font-weight: 100;
    margin-bottom: 8px;
`;

const Bio = styled.span`
    font-size: 16px;
    margin-vertical: 8px;
`;

const defaultTabs = [
    {icon: PeopleIcon, title: '6 followers · 2 following ·'},
    {icon: StarIcon, title: '7'},
];

const Profile = (props) => {
    return <FlexDiv>
        <Avatar src='https://avatars3.githubusercontent.com/u/7427552?s=400&u=20b67c496033d0d7bc43035f1294fc66da3cb524&v=4' />
        <Name>Supreet Singh</Name>
        <UserName>supreetsingh247</UserName>
        <Bio>Front end developer since 1.5 years</Bio>
        <FollowTabGroup>
            {defaultTabs.map(tab => (
                <Tab key={tab.title}><tab.icon size={16} />{tab.title}</Tab>
            ))}
        </FollowTabGroup>
    </FlexDiv>
}

export default Profile;