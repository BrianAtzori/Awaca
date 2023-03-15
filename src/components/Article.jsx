import React from "react";

export default function Article({ text }) {
    if(text){
        return (
            <div className="flex flex-col gap-2 font-lato">
              {text.content.map((item) => {
                return <p>{item.content[0].value}</p>
              })}
            </div>
          );
    }

}
