
const getValue = (id) => {
    return document.getElementById(id).value;
}
export default getValue

const createtag=(tagname,value)=>{
    let Tag=document.createElement(tagname)
    tagname=="img" ? Tag.src=value : Tag.innerHTML=value
    return Tag
}

export {createtag}