let scrollTop;

setTimeout(function() {
    const our_goal_text = document.querySelectorAll("#our-goal");

    for (i = 0; i < our_goal_text.length; i++) {
        our_goal_text[i].classList.add("is-active");
    }
}, 1000);

window.addEventListener("scroll", function (e) {
    scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop);
    if (scrollTop < 950 && scrollTop > 800) {
        const how_to_use_text = document.querySelectorAll("#how-to-use");

        for (i = 0; i < how_to_use_text.length; i++) {
            how_to_use_text[i].classList.add("is-active");
        }
    }
    else if (scrollTop <= 1878 && scrollTop > 1778) {
        const about_us_text = document.querySelectorAll("#about-us");

        for (i = 0; i < about_us_text.length; i++) {
            about_us_text[i].classList.add("is-active");
        }
    }
  });