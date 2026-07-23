import React from "react";

interface Props {
    subtitle: string;

    // callMyAPY: (myValue: string) => void;
    callMyAPY: () => void;
}

export const MySubTitle = React.memo(({subtitle, callMyAPY}: Props) => {

  console.log("MySubTitle re-render");

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button 
      className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
      onClick={callMyAPY}>Lamar a función</button>
      {/* onClick={() => callMyAPY(subtitle)}>Lamar a función</button> */}
    </>
  )
}
)