//generate a rule by dyanamically

/*
#gedt{

}
*/

function makeStyle (){
    let id;
    let style = `
    ${id}{
        font-size: 14px;
        font-family: 'Courier New', Courier, monospace;
        text-align: justify;
        color: antiquewhite;
        font-weight: 400;
        line-height: 5px;                
    }
    `
    return style;
}

export const paragraph = () => {
    
    return (
        `
        <p class="applo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorum sint facere aliquam quas. Doloremque, quidem? Magni officiis quia tenetur quisquam. Accusamus?</p>
        `
    )
}