import React from "react";
import {
  ProfileContainer,
  NameWrapper,
  CardProfileWrapper,
} from "./Profile.elements"
import sashaPhoto from "../../assets/images/sashaK.jpg";

function Profile(props) {

  let profession = props.lenguage === 'spanish' ? <h2>PROGRAMADOR FULL STACK</h2> : <h2>FULL STACK DEVELOPER</h2>;
  let photoText = props.lenguage === 'spanish' ? "Foto de perfil" : "Profile Picture";

  return (
    <>
      <ProfileContainer>
        <NameWrapper>
          <h1 className="font.link">Sasha Nahuel Kowalczuk</h1>
          <h2>{profession}</h2>
        </NameWrapper>
        <CardProfileWrapper>
          <img src={sashaPhoto} alt={photoText}></img>
        </CardProfileWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile;