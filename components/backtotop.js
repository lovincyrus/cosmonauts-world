import React from 'react'

const scrollTo = top => {
  window.scrollTo({ top, behavior: 'smooth' });
};

// const scrollToTop = () => {
//   if (window) {
//     window.scrollTo(0, 0);
//   }
// };

const BackToTop = () => (
  <>
    <button onClick={() => scrollTo(0)}>
      <div>
        <span>Back to Top</span>
      </div>
    </button>
  </>
)

export default BackToTop