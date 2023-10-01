document.querySelectorAll(".video").forEach(function (container) {
  container.addEventListener("mouseover", function () {
    container
      .querySelector(".video_hover")
      .setAttribute("controls", "controls");
  });

  container.addEventListener("mouseout", function () {
    container.querySelector(".video_hover").removeAttribute("controls");
  });
});
