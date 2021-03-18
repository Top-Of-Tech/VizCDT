window.onload = () => {
    const transition = document.querySelector(".transition");
    const nav_links = document.querySelectorAll(".navbar a")

    // Stop the transition
    setTimeout (() => {
        transition.classList.remove("is-active")
    }, 500);

    // Get all the nav links
    for (i = 0; i < nav_links.length; i++) {
        const link = nav_links[i];

        // Add transition to the link
        link.addEventListener("click", e => {
            e.preventDefault();
            let link_url = e.target.href
            transition.classList.add("is-active")

            setTimeout(() => {
                window.location.href = link_url;
            }, 500);
        });
    }
}