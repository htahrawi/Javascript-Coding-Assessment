let myLeads = ["www.awesomelead.com","www.awesomelead.com","www.awesomelead.com"]
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", ()=>{
    // "www.awesomelead.com"
    myLeads.push(inputEl.value)
    renderLeads();
    inputEl.value = ""
})

const renderLeads = () => {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i]+"</li>"f
        // listItems += `<li> <a target="_blank" href="`+myLeads[i]+`">`+ myLeads[i] +`</a></li>`
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}