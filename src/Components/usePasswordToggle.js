import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
function usePasswordToggle() {
  const [visible, setvisibltity] = useState(false);

  const Icon = (
    <FontAwesomeIcon
      icon={visible ? faEyeSlash : faEye}
      onClick={() => setvisibltity((pre) => !pre)}
    />
  );

  
  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}

export default usePasswordToggle;
