import React from "react"

export default function Folder ({exp,handleInsertNode=()=>{},
handleDeleteNode=()=>{},
handleRenameNode=()=>{}}){
  const[click,setClick]=React.useState(false);
  const[input,setInput]=React.useState({visible:false
    ,isFolder:false});
    function handleClick(e,isFolder) {
      e.stopPropagation();
      setClick(true)
      setInput( {
          visible:true,
          isFolder
          })}

    function addFolder(e) {
      if (e.keyCode===13 && e.target.value) {
        handleInsertNode(exp.id,e.target.value,input.isFolder)}}

    const update=(e)=>{
      e.stopPropagation();
      setClick(true)
      setInput({...input,visible:true})
      handleRenameNode(exp.id,e.target.value)
      console.log(handleRenameNode(exp.id,e.target.value))
      console.log(exp.id,e.target.value)
    }
   const remove=(e)=>{
    e.stopPropagation();
    handleDeleteNode(exp.id)    
  }
    if (exp.isFolder){
  return(
    <div>
      <div>
      </div>
      <span onClick={()=>setClick(!click)}>
      {exp.name}</span>
      <span className="material-symbols-outlined" onClick={(e)=>update(e)}>edit</span>
      <span className="material-symbols-outlined" onClick={(e)=>remove(e)}>delete</span>
      <button  onClick={(e)=>handleClick(e,true)} >Folder +</button>
      <button onClick={(e)=>handleClick(e,false)}>File +</button>
      {input.visible && <input 
      type="text"
      onBlur={()=>setInput({...input,visible:false})} 
      autoFocus
      onKeyDown={(e)=>{update(e)}}
      />}
     <div>
       {click&&exp.items.map((x)=>{
         return (
           <Folder exp={x} 
           key={x.id}
           handleInsertNode={handleInsertNode}
           handleDeleteNode={handleDeleteNode}
           handleRenameNode={handleRenameNode}
           />
         )
       })}
        </div>
    </div>
    
  )}
  else{
    return  <div>{exp.name} {exp.name&&<span className="material-symbols-outlined"
     onClick={(e)=>remove(e)}>delete</span>}
     
     </div>
    }
}