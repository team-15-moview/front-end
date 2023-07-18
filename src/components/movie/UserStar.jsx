import { useState } from "react";
import { CheckedLeft, CheckedRight, LeftHalfBox, RightHalfBox, StarsContainer, UnCheckedLeft, UnCheckedRight } from "./movieStyle";
import useModal from '../../hooks/useModal'
import WriteCardModal from "../modals/WriteCardModal";


function UserStar({ max, userStar }) {
  const [Modal, openModal, closeModal, openerRef] = useModal();
  const [star, setStar] = useState(userStar);
  const [isHovered, setHovered] = useState(false);
  const [hoverStar, setHoverStar] = useState(0);

  const HoverOn = () => {
    setHovered(true);
  }
  const HoverOff = () => {
    setHovered(false);
  }

  const onHoverStarHandler = (starValue) => () => {
    setHoverStar(starValue);
  }
  const onClickStarHandler = (starValue) => () => {
    setStar(starValue);
  }



  return (
    <>
      <StarsContainer onMouseEnter={HoverOn} onMouseLeave={HoverOff} onClick={openModal} ref={openerRef}>
        {
          Array(max * 2).fill().map((_, index) => {
            const starValue = isHovered ? hoverStar * 2 : star * 2;
            const currentStarValue = index + 1;

            if (currentStarValue % 2) {
              return (
                <LeftHalfBox onMouseEnter={onHoverStarHandler(currentStarValue / 2)} onClick={onClickStarHandler(currentStarValue / 2)} key={index}>
                  {currentStarValue <= starValue ? <CheckedLeft /> : <UnCheckedLeft />}
                </LeftHalfBox>
              );
            }
            else {
              return (
                <RightHalfBox onMouseEnter={onHoverStarHandler(currentStarValue / 2)} onClick={onClickStarHandler(currentStarValue / 2)} key={index}>
                  {currentStarValue <= starValue ? <CheckedRight /> : <UnCheckedRight />}
                </RightHalfBox>
              );
            }
          })
        }
      </StarsContainer>
      <Modal>
        <WriteCardModal/>
      </Modal>
    </>

  )
}

export default UserStar
