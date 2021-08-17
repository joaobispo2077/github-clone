import React from 'react';

import {
  Container,
  Avatar,
  Flex,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

export type ProfileDataProps = {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  bio?: string;
  location?: string;
  email?: string;
  company?: string;
  blog?: string;
};

const ProfileData: React.FC<ProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  bio,
  location,
  email,
  company,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <p>{bio}</p>
      <Row>
        <li>
          <PeopleIcon />
          <a href="#1">
            <b>{followers}</b>
            <span>followers</span>
          </a>
          <span>·</span>
        </li>
        <li>
          <a href="#1">
            <b>{following}</b>
            <span>following</span>
          </a>
        </li>
      </Row>

      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
