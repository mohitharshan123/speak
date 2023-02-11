import useVoiceControl from "../hooks/useVoiceControl";
import { BsFillRecordCircleFill } from "react-icons/bs";

const Main = ({ children, voiceControls }) => {
  const { attachMicrophone } = useVoiceControl({ voiceControls });
  return (
    <div className="p-10">
      <BsFillRecordCircleFill onClick={attachMicrophone} className="mb-10" />
      {children}
    </div>
  );
};

export default Main;
