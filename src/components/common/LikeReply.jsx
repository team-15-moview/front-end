import React from "react";
import { StyledLikeReply } from "../../styles/commonStyle";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Reply } from "../../assets/icons/reply.svg";

export default function LikeReply({ likes, comments }) {
  return (
    <StyledLikeReply>
      <div>
        <Like /> {likes}
      </div>
      <div>
        <Reply /> {comments}
      </div>
    </StyledLikeReply>
  );
}
