import { useState } from "react";
import { LeftHalfBox, RightHalfBox, StarsContainer } from "./movieStyle";
import { ReactComponent as LeftHalf } from "../../assets/icons/stars/leftStar.svg";
import { ReactComponent as RightHalf } from "../../assets/icons/stars/rightStar.svg";
import useModal from "../../hooks/useModal";
import WriteReviewModal from "../modals/WriteReviewModal";
import { useSelector } from "react-redux";

function UserStar({ max, userStar, title, movie_id}) {
  const [Modal, openModal, closeModal, openerRef, isOpen] = useModal();
  const [star, setStar] = useState(userStar);
  const [isHovered, setHovered] = useState(false);
  const [hoverStar, setHoverStar] = useState(0);

  const isLogin = useSelector((state) => {
    return state.userToken.hasToken;
  });

  const HoverOn = () => {
    setHovered(true);
  };
  const HoverOff = () => {
    setHovered(false);
  };

  const onHoverStarHandler = (starValue) => () => {
    setHoverStar(starValue);
  };
  const onClickStarHandler = (starValue) => () => {
    isLogin ? setStar(starValue) : alert("로그인이 필요합니다!");
  };

  return (
    <>
      <StarsContainer
        onMouseEnter={HoverOn}
        onMouseLeave={HoverOff}
        onClick={isLogin ? openModal : undefined}
        ref={openerRef}
      >
        {Array(max * 2)
          .fill()
          .map((_, index) => {
            const starValue = isHovered ? hoverStar * 2 : isOpen? star * 2 : userStar * 2;
            const currentStarValue = index + 1;

            if (currentStarValue % 2) {
              return (
                <LeftHalfBox
                  onMouseEnter={onHoverStarHandler(currentStarValue / 2)}
                  onClick={onClickStarHandler(currentStarValue / 2)}
                  key={index}
                >
                  {currentStarValue <= starValue ? (
                    <LeftHalf fill="gold" />
                  ) : (
                    <LeftHalf fill="grey" />
                  )}
                </LeftHalfBox>
              );
            } else {
              return (
                <RightHalfBox
                  onMouseEnter={onHoverStarHandler(currentStarValue / 2)}
                  onClick={onClickStarHandler(currentStarValue / 2)}
                  key={index}
                >
                  {currentStarValue <= starValue ? (
                    <RightHalf fill="gold" />
                  ) : (
                    <RightHalf fill="grey" />
                  )}
                </RightHalfBox>
              );
            }
          })}
      </StarsContainer>
      <Modal>
        <WriteReviewModal
          title={title}
          movie_id={movie_id}
          star={star}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default UserStar;
