let scrollTop;

setTimeout(function() {
    const our_goal_text = document.querySelectorAll("#our-goal");

    for (i = 0; i < our_goal_text.length; i++) {
        our_goal_text[i].classList.add("is-active");
    }
}, 1000);

if (innerHeight >= 700) {
    console.log("No u")
    window.addEventListener("scroll", function (e) {
        scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(scrollTop);
        if (innerHeight >= 1000) {
            if (scrollTop < 950 && scrollTop > 600) {
                const how_to_use_text = document.querySelectorAll("#how-to-use");
        
                for (i = 0; i < how_to_use_text.length; i++) {
                    how_to_use_text[i].classList.add("is-active");
                }
            }
            else if (scrollTop <= 2000 && scrollTop > 1700) {
                const about_us_text = document.querySelectorAll("#about-us");
        
                for (i = 0; i < about_us_text.length; i++) {
                    about_us_text[i].classList.add("is-active");
                }
            }
        }
    
        else if (innerHeight >= 900) {
            if (scrollTop < 850 && scrollTop > 550) {
                const how_to_use_text = document.querySelectorAll("#how-to-use");
        
                for (i = 0; i < how_to_use_text.length; i++) {
                    how_to_use_text[i].classList.add("is-active");
                    console.log(how_to_use_text[i])
                }
            }
            else if (scrollTop <= 1800 && scrollTop > 1500) {
                const about_us_text = document.querySelectorAll("#about-us");
        
                for (i = 0; i < about_us_text.length; i++) {
                    about_us_text[i].classList.add("is-active");
                }
            }
        }
    
        else if (innerHeight >= 800) {
            if (scrollTop < 750 && scrollTop > 500) {
                const how_to_use_text = document.querySelectorAll("#how-to-use");
        
                for (i = 0; i < how_to_use_text.length; i++) {
                    how_to_use_text[i].classList.add("is-active");
                }
            }
            else if (scrollTop <= 1600 && scrollTop > 1300) {
                const about_us_text = document.querySelectorAll("#about-us");
        
                for (i = 0; i < about_us_text.length; i++) {
                    about_us_text[i].classList.add("is-active");
                }
            }
        }
    
        else if (innerHeight >= 700) {
            if (scrollTop < 700 && scrollTop > 450) {
                const how_to_use_text = document.querySelectorAll("#how-to-use");
        
                for (i = 0; i < how_to_use_text.length; i++) {
                    how_to_use_text[i].classList.add("is-active");
                }
            }
            else if (scrollTop <= 1400 && scrollTop > 900) {
                const about_us_text = document.querySelectorAll("#about-us");
        
                for (i = 0; i < about_us_text.length; i++) {
                    about_us_text[i].classList.add("is-active");
                }
            }
        }
    });
}
else {
    setTimeout(function() {
    console.log("ELSE")
    const how_to_use_text = document.querySelectorAll("#how-to-use");
    const about_us_text = document.querySelectorAll("#about-us");

    console.log(about_us_text)
    console.log(how_to_use_text)
        
    for (i = 0; i < how_to_use_text.length; i++) {
        console.log("Hello there")
        console.log(how_to_use_text[i])
        how_to_use_text[i].classList.add("is-active");
    }

    for (i = 0; i < about_us_text.length; i++) {
        about_us_text[i].classList.add("is-active");
    }
    }, 1000);
}