const width = 22;
const height = 18;

function init() {
    render()
}

function render() {

    let html = '<table cellpadding=0 cellspacing=0>'

    for (let row = 1; row < height; row++) {
        html+='<tr>'

        for(let column = 1; column < width; column++) {
            html+=`
            <td class="bg${row}__${column}"/> 
            `
        }

        html+='</tr>'
    }
    html+='</table>'

    document.querySelector('#root').innerHTML = html
}

init()