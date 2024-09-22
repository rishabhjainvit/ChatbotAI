import React from 'react';
import styled from 'styled-components';

// Styled Components for the Page Layout and Profile Card
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c3e50;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #f1c40f;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const ProfileName = styled.h4`
  color: #f39c12;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProfileRole = styled.p`
  font-size: 1.2rem;
  color: #ecf0f1;
  margin-bottom: 15px;
`;

// New Styled Components for Additional Information
const ProfileDetails = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 100%;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  color: #ecf0f1;
  margin: 8px 0;
  display: flex;
  align-items: center;

  & span {
    font-weight: bold;
    color: #f39c12;
    margin-right: 10px;
  }
`;

const ProfileBio = styled.p`
  font-size: 1rem;
  color: #bdc3c7;
  line-height: 1.5;
  margin-top: 15px;
`;

// Component
const ProfileCard = () => {
  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileImage
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <ProfileInfo>
          <ProfileName>Rishabh Jain</ProfileName>
          <ProfileRole>Admin</ProfileRole>
        </ProfileInfo>
        
        <ProfileDetails>
          <DetailItem><span>Location:</span>Bangalore, India</DetailItem>
          <DetailItem><span>Email:</span>rishabh.jain@example.com</DetailItem>
          <DetailItem><span>Phone:</span>+91 9876543210</DetailItem>
          <DetailItem><span>Joined:</span> January 2020</DetailItem>
        </ProfileDetails>

        <ProfileBio>
          Passionate web developer with expertise in frontend development. Skilled in React, JavaScript, and UI/UX design. Always exploring new technologies and staying updated with the latest trends in web development. Experienced in project management and stock trading.
        </ProfileBio>
      </ProfileContainer>
    </PageContainer>
  );
};

export default ProfileCard;
