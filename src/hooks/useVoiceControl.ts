import { useSpeechContext } from "@speechly/react-client";
import { useEffect } from "react";

const useVoiceControl = ({ voiceControls }) => {
  const { segment, attachMicrophone, start } = useSpeechContext();

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (segment) {
      const control = segment.words[0]?.value;
      if (!voiceControls[control]) return;
      const element = document.getElementById(control);
      if (!element) return;
      element.click();
    }
  }, [segment]);

  return { attachMicrophone };
};

export default useVoiceControl;
