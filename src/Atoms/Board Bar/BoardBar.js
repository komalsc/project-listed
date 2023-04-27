import React from "react";
import styles from "./BoardBar.module.css";
function BoardBar() {
  return (
    <div className={styles.BoardBarContainer}>
      <h2>Dashboard</h2>
      <div>
        <input type="text" placeholder="Search..." />
        <svg
          width="18"
          height="20"
          style={{ cursor: "pointer" }}
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z"
            fill="black"
          />
        </svg>
        <img
          height="28px"
          width="28px"
          style={{ cursor: "pointer" }}
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
}

export default BoardBar;