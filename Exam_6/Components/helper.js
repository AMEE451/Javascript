const getvalue = (id) => {
    return document.getElementById(id).value
}
export default getvalue

const createtag=(tagname,value)=>{
    let Tag=document.createElement(tagname)
    tagname=="img" ? Tag.src=value : Tag.innerHTML=value
    return Tag
}

export {createtag}
