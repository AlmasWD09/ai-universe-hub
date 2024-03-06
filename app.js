const allTools = document.getElementById('all-Tools')


const loadData = async (isShowAll) =>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url)
    const data = await res.json()
    const result = data.data.tools;
    
    displayData(result,isShowAll);
}
const displayData = (tools,isShowAll) =>{
   allTools.textContent =''
    if(isShowAll){
         tools;
    }
    else{
        tools = tools.slice(0,6)
    }
    tools.forEach(singleTool => {
        // console.log(singleTool);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact p-4 bg-base-100 shadow-xl">
        <figure class="">
            <img class=" bg-gray-300 p-4"
                 src="${singleTool?.image || 'No Image Founded'}" alt="Shoes" />
        </figure>
        <div class="">
            <h2 class="card-title text-2xl font-bold pt-3">Features</h2>
            <ol class="list-decimal pt-1 text-gray-500 p-4">
                <li>${singleTool.features[0]}</li>
                <li>${singleTool.features[1]}</li>
                <li>${singleTool.features[2]}</li>
            </ol>
            <hr class="my-2" />
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="card-title text-2xl font-bold">${singleTool.name}</h2>
                    <p class="text-gray-500">${singleTool.published_in}</p>
                </div>
                <div>
                    <button class="btn rounded-full"><img src="./icons/Vector (1).png" alt=""></button>
                </div>
            </div>
        </div>
    </div>
        `
        allTools.appendChild(div)
    });
}


const showAllData = () =>{
    loadData(true)
}
loadData();