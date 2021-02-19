const headerSection = document.querySelector(".header")
const headerTriangle = document.querySelector(".header-background-triangle")
const headerFirstName = document.querySelector(".firstName")
const headerLastName = document.querySelector(".lastName")
const mainSection = document.querySelector(".main")
const mainTriangle = document.querySelector(".main-background-triangle")
const experienceBackground = document.querySelector(".experience-background")
const experienceBackgroundTwo = document.querySelector(".experience-background-2")

const thresholdArray = []
for (let i = 0; i <= 1; i += 0.01) {
    thresholdArray.push(i)
}
const config = {
    root: Document.body,
    threshold: thresholdArray
}

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.className === "header") {
            headerTriangle.style.transform = "rotate(" + Math.min(315 + (entry.intersectionRatio*50), 360) + "deg)"
            mainTriangle.style.transform = "rotate(" + Math.min(345 + (entry.intersectionRatio*20), 360) + "deg)"
            headerFirstName.style.transform = "translate(" + (entry.intersectionRatio*-100) + "px, 0)"
            headerLastName.style.transform = "translate(" + (entry.intersectionRatio*100) + "px, 0)"
        }
        if (entry.target.className === "experience-background-2") {
            experienceBackgroundTwo.style.transform = "translate(" + Math.min(entry.intersectionRatio*200, 80) + "vw, 0)"
        }
        if (entry.target.className === "experience-background") {
            console.log(entry.intersectionRatio)
            experienceBackground.style.transform = "translate(" + Math.min(entry.intersectionRatio*150, 85) + "vw, 0)"
        }
      });
}, config)

observer.observe(headerSection)
observer.observe(experienceBackground)
observer.observe(experienceBackgroundTwo)
