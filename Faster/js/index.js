document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");
  const section2 = document.getElementById("section2");
  if (!scrollBtn || !section2) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section2Top = section2.offsetTop;
      if (entry.isIntersecting || window.scrollY >= section2Top) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
  });

  observer.observe(section2);
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videoModal = document.getElementById("videoModal");
  const youtubeVideo = document.getElementById("youtubeVideo");
  const videoURL = "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1";

  if (videoModal && youtubeVideo) {
    videoModal.addEventListener("show.bs.modal", function () {
      youtubeVideo.src = videoURL;
    });

    videoModal.addEventListener("hidden.bs.modal", function () {
      youtubeVideo.src = "";
    });
  }
});

