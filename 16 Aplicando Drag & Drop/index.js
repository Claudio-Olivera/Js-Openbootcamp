const paragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")
const trashCan = document.querySelector(".trash")

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("dragstart", () => {
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)
        const element_phantom = document.querySelector(".image-phantom")
        event.dataTransfer.setDragImage(element_phantom, 0, 0)
    })
    paragraph.addEventListener("dragend", () => {
        paragraph.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })
    section.addEventListener("drop", event => {
        console.log("drop")
        const id_paragraph = event.dataTransfer.getData("id")
        const paragraph = document.getElementById(id_paragraph)
        section.appendChild(paragraph)
    })
})

trashCan.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

trashCan.addEventListener("drop", event => {
    const id_paragraph = event.dataTransfer.getData("id")
    document.getElementById(id_paragraph).remove()
}) 
