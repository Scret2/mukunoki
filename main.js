$(document).ready(() => {
  const spinner = document.getElementById("loading");

  // Add .loaded to .loading
  spinner.classList.add("loaded"); //ロードしたらLoading画面を隠す

  const pics_src = ["images/house_1.jpg", "images/house_2.jpg", "images/house_3.jpg"];
  let num = -1;

  function slideshow_timer() {
    /*imgの数-1*/ if (num === 2) {
      num = 0;
    } else {
      num++;
    }

    document.getElementById("home_img").src = pics_src[num];
  }

  setInterval(slideshow_timer, 5000);

  const pics_src_2 = ["images/home_2.jpg", "images/home_3.jpg", "images/home_4.jpg"];
  let num_2 = -1;

  function slideshow_timer_2() {
    /*imgの数-1*/ if (num_2 === 2) {
      num_2 = 0;
    } else {
      num_2++;
    }

    document.getElementById("home_img_2").src = pics_src_2[num_2];
  }

  setInterval(slideshow_timer_2, 4000);
});
