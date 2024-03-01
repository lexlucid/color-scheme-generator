
const colorPicker = document.getElementById("color-picker")
const colorMode = document.getElementById("color-mode")
const btn = document.getElementById("btn")
const colorSchemes = document.getElementById("color-schemes")
const hex = document.getElementById("hex")
const hexCode = document.querySelectAll(".hex-color")

btn.addEventListener("click", () => {
    let seedColor = colorPicker.value.slice(1)
    let mode = colorMode.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5&format=json`)
        .then(res => res.json())
         .then(data => {
            const colors = data.colors
            let colorScheme = ""

            colors.map(color => {
               colorScheme +=  `
                    <div class="color" style="background: ${color.hex.value};">
                        <div class="hex-code">
                            <p class="hex">${color.hex.value}</p>
                        </div>
                    </div>
                `
            }).join(" ")

            colorSchemes.innerHTML = colorScheme
         })

})



hexCode.addEventListener("click", () => {
    copyHex()
})

function copyHex () {
    const clipboard = navigator.clipboard
    clipboard.writeText(hexCode.innerText)
        .then(() => alert("Hex copied!"))
}




