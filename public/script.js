let input = document.querySelector("#input")
let button = document.querySelector("#button")
let output = document.querySelector("#output")

button.addEventListener("click", async function(){
    let value = input.value
    let broadCastREC = await fetch(`/stat`, { // broadCastREC is data receiver
        method: "post",
        headers: {
            "Content-Type":"application/json",
        }, body:JSON.stringify({
            value,
        })
    })
    output.textContent = await broadCastREC.json()
})