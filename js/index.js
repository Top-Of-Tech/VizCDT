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
    if (innerHeight >= 1000) {
        if (scrollTop < 950 && scrollTop > 500) {
            const how_to_use_text = document.querySelectorAll("#how-to-use");
    
            for (i = 0; i < how_to_use_text.length; i++) {
                how_to_use_text[i].classList.add("is-active");
            }
        }
        else if (scrollTop <= 2000 && scrollTop > 1600) {
            const about_us_text = document.querySelectorAll("#about-us");
    
            for (i = 0; i < about_us_text.length; i++) {
                about_us_text[i].classList.add("is-active");
            }
        }
    }

    else if (innerHeight >= 900) {
        if (scrollTop < 950 && scrollTop > 500) {
            const how_to_use_text = document.querySelectorAll("#how-to-use");
    
            for (i = 0; i < how_to_use_text.length; i++) {
                how_to_use_text[i].classList.add("is-active");
            }
        }
        else if (scrollTop <= 1800 && scrollTop > 1400) {
            const about_us_text = document.querySelectorAll("#about-us");
    
            for (i = 0; i < about_us_text.length; i++) {
                about_us_text[i].classList.add("is-active");
            }
        }
    }

    else if (innerHeight >= 800) {
        if (scrollTop < 950 && scrollTop > 500) {
            const how_to_use_text = document.querySelectorAll("#how-to-use");
    
            for (i = 0; i < how_to_use_text.length; i++) {
                how_to_use_text[i].classList.add("is-active");
            }
        }
        else if (scrollTop <= 1600 && scrollTop > 1200) {
            const about_us_text = document.querySelectorAll("#about-us");
    
            for (i = 0; i < about_us_text.length; i++) {
                about_us_text[i].classList.add("is-active");
            }
        }
    }

    else if (innerHeight >= 700) {
        if (scrollTop < 950 && scrollTop > 500) {
            const how_to_use_text = document.querySelectorAll("#how-to-use");
    
            for (i = 0; i < how_to_use_text.length; i++) {
                how_to_use_text[i].classList.add("is-active");
            }
        }
        else if (scrollTop <= 1400 && scrollTop > 1000) {
            const about_us_text = document.querySelectorAll("#about-us");
    
            for (i = 0; i < about_us_text.length; i++) {
                about_us_text[i].classList.add("is-active");
            }
        }
    }
});