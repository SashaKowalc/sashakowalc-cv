import React, { useState } from "react";
import {
  ProfileContainer,
  NameWrapper,
  CardProfileWrapper,
  CardProfile
} from "./Profile.elements"

function Profile(props) {

  let text = props.lenguage === 'spanish' ? <h2>Programador Full Stack</h2> : <h2>Full Stack Developer</h2>;

  return (
    <>
      <ProfileContainer>
        <NameWrapper>
          <h1 className="font.link">Sasha Nahuel Kowalczuk</h1>
          {text}
        </NameWrapper>
        <CardProfileWrapper>
          <CardProfile></CardProfile>
        </CardProfileWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile;