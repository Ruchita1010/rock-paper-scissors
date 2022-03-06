// const mainContainer = document.querySelector("#main-container");
const options = Array.from(document.querySelectorAll(".option"));
console.log(options)

const selectingOption = (e) => {
    const selectedOption = e.target.id;
    let val = 0;
    switch (selectedOption) {
        case "rock":
            {
                val += 1;
                break;
            }
        case "paper":
            {
                val += 1;
                break;
            }
        case "scissor":
            {
                val += 1;
                break;
            }
    }
    console.log(val);
}

options.forEach(option => {
    option.addEventListener("click", selectingOption);
})


// Music from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6826">Pixabay</a>
// Success fanfare sth
// Music from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6185">Pixabay</a>
// level win
Music from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6416">Pixabay</a>
// short success
// Music from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6346">Pixabay</a>
// Music by <a href="/users/muzaproduction-24990238/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=13397">Muzaproduction</a> from <a href="https://pixabay.com/music/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=13397">Pixabay</a>
// Music by <a href="/users/muzaproduction-24990238/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=13394">Muzaproduction</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=13394">Pixabay</a>