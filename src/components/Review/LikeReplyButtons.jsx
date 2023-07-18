import React from "react";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Reply } from "../../assets/icons/reply.svg";
import { ReviewLikeReplyButtons } from "./reviewStyle";

export default function LikeReplyButtons() {
  return (
    <ReviewLikeReplyButtons>
      <button>
        <Like /> 좋아요
      </button>
      <button>
        <Reply /> 댓글
      </button>
    </ReviewLikeReplyButtons>
  );
}
