const category = document.querySelector(".categories")
const infoProduct = document.querySelector(".infoProduct")

const baseUrl = "https://data-lesson-13.vercel.app/phones"


async function getData(){
    try {
        const res = await fetch(`${baseUrl}`)
        const data = await res.json()
        render(data)
    } catch (error) {
        console.log(error);
    }
}

function render(data){
    console.log(data);
    infoProduct.innerHTML = data.map((item)=>{
        return`
        <div data-id=${item.id} class="border-2 rounded-md flex flex-col gap-2 p-2">
            <img src="${item.img}" data-id=${item.id} alt="" class="w-[250px]">

            <div data-id=${item.id} class="flex flex-col gap-2 p-2">
            <h1 data-id=${item.id} class="font-semibold text-[18px]">${item.title}</h1>
            <h1 data-id=${item.id}>${item.color}</h1>
            </div>
        </div>`
    }).join("")
}
getData()

infoProduct.addEventListener("click", async (e)=>{

    const id = e.target.dataset.id
    console.log(id);
    if (id) {
    try {
        const res = await fetch(`${baseUrl}/${id}`)
        const data = await res.json()
        ren(data)
    } catch (error) {
        
    }        
    }
})


function ren(item) {
    category.innerHTML = `
    <div class="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
    <div data-id=${item.id} class="border-2 rounded-md flex flex-col gap-2 p-2 w-[300px] items-center bg-gray-400">
            <img src="${item.img}" data-id=${item.id} alt="" class="w-[250px]">

            <div data-id=${item.id} class="flex flex-col gap-2 p-2 items-start w-full">
            <h1 data-id=${item.id} class="font-semibold text-[18px]">${item.title}</h1>
            <h1 data-id=${item.id} class="font-semibold text-[18px]">${item.brand}</h1>
            <h1 data-id=${item.id} class="font-semibold text-[18px]">${item.rame}</h1>
            <h1 data-id=${item.id} class="font-semibold text-[18px]">${item.color}</h1>
            <h1 data-id=${item.id}>${item.price}</h1>
            </div>
        </div>
    </div>`
    
}

window.addEventListener("click",(e)=>{
    category.innerHTML = ""
})