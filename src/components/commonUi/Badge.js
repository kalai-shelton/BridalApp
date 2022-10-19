import React from "react";


export const Badges = ({
 children
}) => {
  return (
    <div className="text-white grid bg-primary rounded-full px-5 py-1">
      <div className="place-self-center">{children}</div>
    </div>
  );
};
