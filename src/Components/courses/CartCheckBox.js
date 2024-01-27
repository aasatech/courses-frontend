import React from "react";

function CartCheckBox({ data = [], label, handleonChange }) {
  return (
    <div class=" p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <div className="">
        <h3>{label}</h3>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="">
          {data.map(({ name, id }, index) => {
            return (
              <li key={index}>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      onChange={(e) => handleonChange(id, e)}
                    />
                    <label
                      className="pl-2"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      {name}
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CartCheckBox;
