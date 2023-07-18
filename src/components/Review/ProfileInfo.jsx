import React from "react";
import { ProfileSection } from "./reviewStyle";
import Star from "../common/Star";

import { ReactComponent as User } from "../../assets/icons/user.svg";

export default function ProfileInfo({ nickname, star, content, profile }) {
  return (
    <ProfileSection>
      <figure>{profile === null ? <User /> : <img alt="프로필" />}</figure>
      <figcaption>
        <p>{nickname}</p>
        {star ? <Star star={star} /> : <p>{content}</p>}
      </figcaption>
    </ProfileSection>
  );
}
