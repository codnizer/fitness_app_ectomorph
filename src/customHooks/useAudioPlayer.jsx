import { useEffect, useRef } from 'react';

const useAudioPlayer = (audioSource, isSoundEnabled) => {
  const audioRef = useRef(new Audio(audioSource));

  useEffect(() => {
    const audio = audioRef.current;

    const handleAudioEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleAudioEnded);

    if (isSoundEnabled) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('ended', handleAudioEnded);
    };
  }, [audioSource, isSoundEnabled]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;

      if (document.visibilityState === 'hidden') {
        audio.pause();
      } else if (isSoundEnabled) {
        audio.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isSoundEnabled]);

  return audioRef;
};

export default useAudioPlayer;
