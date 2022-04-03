import React, { useContext, useEffect, useState } from "react";

import logo from "./../../assets/logo-desktop.svg";
import github from "./../../assets/github.svg";
import location from "./../../assets/location.svg";
import followers from "./../../assets/followers.svg";
import repository from "./../../assets/repository.svg";
import company from "./../../assets/company.svg";
import emoji from "./../../assets/avatar.svg";

import {
  Container,
  Header,
  Avatar,
  ProfileContent,
  ProfileInfo,
  Name,
  Username,
  Icon,
  Biography,
  ProfileData,
  Description,
  Identification,
} from "./styles";
import { UserContext } from "../../context/UserContext";

const ProfileCard: React.FC = () => {
  const context = useContext(UserContext);

  return (
    <Container>
      <Header>
        <span>Rocket card</span>
        <img src={logo} alt="Logo da Rocketseat" />
      </Header>

      {context.userData?.avatar_url ? (
        <Avatar>
          <img src={context.userData?.avatar_url} alt="Avatar" />
        </Avatar>
      ) : (
        <Avatar>
          <img src={emoji} alt="Avatar" />
        </Avatar>
      )}

      <ProfileContent>
        <Identification>
          <ProfileInfo>
            <Icon>
              <img src={github} alt="" />
            </Icon>
            {context.userData?.login ? (
              <Username>{context.userData?.login}</Username>
            ) : (
              <Username>username</Username>
            )}
          </ProfileInfo>

          <div>
            {context.userData?.name ? (
              <Name>{context.userData?.name}</Name>
            ) : (
              <Name>Name</Name>
            )}
            {context.userData?.bio ? (
              <Biography>{context.userData?.bio}</Biography>
            ) : (
              <Biography>biography</Biography>
            )}
          </div>
        </Identification>
        <Description>
          <ProfileInfo>
            <Icon>
              <img src={followers} alt="" />
            </Icon>
            <ProfileData>{context.userData?.followers} followers</ProfileData>
          </ProfileInfo>
          <ProfileInfo>
            <Icon>
              <img src={followers} alt="" />
            </Icon>
            <ProfileData>{context.userData?.following} following</ProfileData>
          </ProfileInfo>
          <ProfileInfo>
            <Icon>
              <img src={repository} alt="" />
            </Icon>
            <ProfileData>
              {context.userData?.public_repos} repositories
            </ProfileData>
          </ProfileInfo>

          {context.userData?.company ? (
            <ProfileInfo>
              <Icon>
                <img src={company} alt="" />
              </Icon>
              <ProfileData>{context.userData?.company}</ProfileData>
            </ProfileInfo>
          ) : (
            <></>
          )}

          {context.userData?.location ? (
            <ProfileInfo>
              <Icon>
                <img src={location} alt="" />
              </Icon>
              <ProfileData>{context.userData?.location}</ProfileData>
            </ProfileInfo>
          ) : (
            <></>
          )}
        </Description>
      </ProfileContent>
    </Container>
  );
};

export default ProfileCard;
function componentDidMount() {
  throw new Error("Function not implemented.");
}
