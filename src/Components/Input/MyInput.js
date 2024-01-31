import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
const { TextInput } = require("flowbite-react");
const { ErrorMessage } = require("formik");

const MyInput = ({
  label,
  showError,
  field,
  form,
  secretEntry = false,
  ...props
}) => {
  const [visible, setvisibltity] = useState(secretEntry);
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <div className="relative">
        <TextInput {...field} {...props} type={visible ? "password" : "text"} />
        {secretEntry && (
          <span
            className="bottom-0 absolute
right-2 transform -translate-y-1/3 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={visible ? faEyeSlash : faEye}
              onClick={() => setvisibltity((pre) => !pre)}
            />
          </span>
        )}
      </div>

      {showError && (
        <ErrorMessage
          name={field.name}
          render={(msg) => <div className="text-red-500">{msg}</div>}
        />
      )}
    </div>
  );
};

export default MyInput;
