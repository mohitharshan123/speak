import { useEffect } from "react";
import { useSpeechContext } from "@speechly/react-client";

interface VoiceControlProps {
  voiceControls: {
    [key: string]: string;
  }[];
}
const useVoiceControl = ({ voiceControls }: VoiceControlProps) => {
  const { segment, attachMicrophone, start } = useSpeechContext();

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (segment) {
      const control = segment.words[0]?.value;
      if (!voiceControls[control]) return;
      const element = document.getElementById(control);
      if (!element || !element.click) return;
      element.click();
    }
  }, [segment]);

  return { attachMicrophone };
};

export default useVoiceControl;
