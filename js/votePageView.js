function updateViewVotePage(){
    document.getElementById('app').innerHTML = `
        <button onclick="goToOptionsPage()">Til alternativer-siden</button>
        <hr/>
        
        <ul>
            ${createVotesHtml()}
        </ul>        
        
    `;
}

function createVotesHtml(){
    let html = '';
    for(let i = 0; i < model.options.length; i++){
        let option = model.options[i];
        html += `
            <li>
                <button 
                    onclick="vote(${i})"
                    style="width: 100px; background-color: ${option.color}"
                    >
                    ${option.text}
                </button>
                ${option.voteCount ? ` - ${option.voteCount}` : ''}
            </li>
            `;
    }
    return html;
}