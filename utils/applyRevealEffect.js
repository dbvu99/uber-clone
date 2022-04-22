export default function applyRevealEffect(elementId, options = { threshold: [0, 1], rootMargin: "-50px" }) {
  const element = document.getElementById(elementId);

  if (!element) return;
  // const p1 = document.getElementById(pId);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // this is not an ideal solution for sliding up and down because it causes element to enter view port, but it's good to know
        // if (entry.isIntersecting) {
        //   header1.classList.add("slideUp-animate");
        // } else {
        //   header1.classList.remove("slideUp-animate");
        // }
        // console.log(id, entry.intersectionRatio);
        if (entry.intersectionRatio === 1) {
          element.classList.add("slideUp-animate");
        }
        if (entry.intersectionRatio === 0) {
          element.classList.remove("slideUp-animate");
        }
      });
    },
    options
    // {
    //   threshold, // when the element is at 0% start hidding it, when the element is at 100% start showing it
    //   rootMargin, //shrink the view box by 50px
    // }
  );
  // don't forget to add the observer to the element
  observer.observe(element);
}
