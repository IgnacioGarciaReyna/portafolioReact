import React from "react";
import resumeURL from "../assets/Currículum Vitae - Ignacio Garcia Reyna.pdf";

const Navigation = () => {
  const downloadResume = () => {
    const downloadInstance = document.createElement("a");
    downloadInstance.href = resumeURL;
    downloadInstance.target = "_blank";
    downloadInstance.download = "Resume";
    document.getElementById("container")?.appendChild(downloadInstance);
    downloadInstance.click();
    document.getElementById("container")?.removeChild(downloadInstance);
  };

  return (
    <div className="container-navigation">
      <nav id="nav">
        <ul>
          <li>
            <a className="header-pag-item" href="">
              Home
            </a>
          </li>
          <li>
            <a className="header-pag-item" href="">
              Algo
            </a>
            {/* <!-- <ul>
            <li><a href="left-sidebar.html">Left Sidebar</a></li>
            <li><a href="right-sidebar.html">Right Sidebar</a></li>
            <li><a href="no-sidebar.html">No Sidebar</a></li>
            <li>
              <a href="#">Submenu</a>
              <ul>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
                <li><a href="#">Option 4</a></li>
              </ul>
            </li>
          </ul> --> */}
          </li>
          <li>
            <a className="header-pag-item" href="">
              Algo 1
            </a>
          </li>
          <li>
            <a
              id="button-resume"
              className="button primary"
              onClick={downloadResume}
            >
              Descargar Currículum
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
