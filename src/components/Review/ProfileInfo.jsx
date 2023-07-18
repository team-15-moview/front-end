import React from "react";
import { ProfileSection } from "./reviewStyle";
import Star from "../common/Star";

export default function ProfileInfo({ star, content }) {
  return (
    <ProfileSection>
      <figure>
        <img alt="프로필" />
      </figure>
      <figcaption>
        <p>작성자</p>
        {star ? <Star>8</Star> : <p>{content}</p>}
      </figcaption>
    </ProfileSection>
  );
}
