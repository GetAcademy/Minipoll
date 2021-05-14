function updateViewOptionsPage(){
    document.getElementById('app').innerHTML = `
        <button onclick="goToVotePage()">Til stemme-siden</button>
        <hr/>    
        Nåværende alternativer: 
        <ul>
            ${createOptionsHtml()}
        </ul>
        Nytt alternativ: <br/>
        <input 
            type="txt" 
            oninput="model.inputs.optionsPage.newOption=this.value" 
            value="${model.inputs.optionsPage.newOption}"
            />
        <button onclick="addOption()">Legg til</button>

        
    `;
}

function createOptionsHtml(){
    let html = '';
    for(let i = 0; i < model.options.length; i++){
        let option = model.options[i];
        html += `
            <li>
                ${option.text}
            </li>
            `;
    }
    return html;
}