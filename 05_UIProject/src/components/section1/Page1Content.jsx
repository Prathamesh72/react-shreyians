import React from "react";
import LeftContaint from "./LeftContaint";
import RightContaint from "./RightContaint";

function Page1Content(props) {
  return (
    <div className="pb-16 pt-6 px-18 h-[90vh] flex items-center gap-10">
      <LeftContaint />
      <RightContaint users={props.users} tag={props.tag} />
    </div>
  );
}

export default Page1Content;
