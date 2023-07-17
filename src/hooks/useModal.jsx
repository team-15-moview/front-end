import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const ModalTemplate = ({coverExist, isOpen, modalRef}) => ({children}) => {

  if(!isOpen)
    return <></>

  return (coverExist ?
    <ViewportCover>
      <div ref={modalRef}>
        {children}
      </div>
    </ViewportCover>
    :
    <div ref={modalRef}>
      {children}
    </div>
    );
}

const ViewportCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(221, 221, 221, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`

const useModal = (coverExist = true, exitByOuterClick = true) => {
  const openerRef = useRef();
  const modalRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  },[]);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  },[]);

  useEffect(() => {
    const outerOnClick = (event) => {
      if (!modalRef.current.contains(event.target)&& !openerRef.current.contains(event.target))
        closeModal();
    };

    if(exitByOuterClick){
      document.addEventListener('click', outerOnClick);
    }

    return () => {
      if(exitByOuterClick)
        document.removeEventListener('click', outerOnClick);
    };
  },  [exitByOuterClick, closeModal, openerRef])
  
  return [
    ModalTemplate({ coverExist, isOpen, modalRef}),
    openModal,
    closeModal,
    openerRef
  ]
} 

export default useModal;