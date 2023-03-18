import React from "react";
import nextId from "react-id-generator";

export default function Article({ text }) {
    if(text){
        return (
            <div className="flex flex-col gap-2 font-lato">
              {text.content.map((item) => {
                return <p key={nextId()}>{item.content[0].value}</p>
              })}
            </div>
          );
    }

}
