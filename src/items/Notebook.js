import React from "react";
import "../styles/Notebook.css";
const foo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam lacus sed vulputate malesuada. Sed eu est ut est viverra laoreet ut quis elit. Sed pharetra lorem ut magna dapibus pretium. Curabitur ut quam vitae arcu lacinia dapibus. Nulla facilisi. Pellentesque interdum ligula molestie metus blandit, in viverra justo feugiat. Maecenas sed lectus volutpat tortor congue porta. Cras pulvinar sit amet neque ac tincidunt. Duis et convallis quam, ut convallis tellus. Maecenas quis diam eros. Donec ut eros malesuada, porttitor libero fermentum, lobortis erat. Cras vel sem cursus, eleifend risus id, tempor arcu. Praesent eu lobortis arcu. ";
export default function Notebook() {
  return (
    <div className="Notebook">
      <div className="Notebook-left">
        <form>
          <textarea name="yesterday" id="left" />
        </form>
      </div>
      <div className="Notebook-right">
        <textarea name="today" id="right" />
      </div>
    </div>
  );
}
