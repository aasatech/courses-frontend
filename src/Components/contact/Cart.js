import React from "react";
import Image from "next/image";

function CartContact(props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg mb-5 mx-5">
      <div className="bg-white-200 w-auto h-52 my-5">
        <div className="flex justify-center">
          <Image src={props.image} width={60} height={60} />
        </div>
        <h2 className="font-bold text-2xl text-center mt-5">{props.name}</h2>
        <h5 className="mx-10 mt-5  text-center">
          EduQuest E-Learning Agency, Los Angeles NY-1216, USA.
        </h5>
      </div>
    </div>
  );
}

export default CartContact;
