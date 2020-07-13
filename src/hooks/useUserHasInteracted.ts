import { useState, useEffect } from 'react';

const useUserHasInteracted = () => {
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  useEffect(() => {
    const onInteract = () => {
      clearListeners();
      setUserHasInteracted(true);
      console.log('onInteract');
    };

    document.body.addEventListener('mousemove', onInteract);
    document.body.addEventListener('scroll', onInteract);
    document.body.addEventListener('keydown', onInteract);
    document.body.addEventListener('click', onInteract);
    document.body.addEventListener('touchstart', onInteract);
    document.body.addEventListener('wheel', onInteract);

    const clearListeners = () => {
      document.body.removeEventListener('mousemove', onInteract);
      document.body.removeEventListener('scroll', onInteract);
      document.body.removeEventListener('keydown', onInteract);
      document.body.removeEventListener('click', onInteract);
      document.body.removeEventListener('touchstart', onInteract);
      document.body.removeEventListener('wheel', onInteract);
    };

    return () => clearListeners();
  }, []);

  return userHasInteracted;
};

export default useUserHasInteracted;
