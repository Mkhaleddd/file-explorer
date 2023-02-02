const useTraverseTree = () => {
  const insertNode =(tree, folderId, item, isFolder)=>{
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id:new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: []
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  const deleteNode=(tree,folderId)=>{
    if (tree.id===folderId && tree.isFolder ) {
    return   tree.items.filter(obj=>obj.id !== folderId)            
    }
    var deletedNode=[]
   if(tree.isFolder){
    deletedNode=tree.items.map((ob)=>{
     return deleteNode(ob,folderId)
    })} else{
      if (tree.id===folderId) tree.name=""; 
    }
    return {...tree,items:deletedNode}
  } ;
  const renameNode = (tree,folderId,newName) => {     
          tree.items.map(obj=>{
         return tree.id===folderId?{...obj,name:newName}:obj;
        }) 
         let updatedNode=[]
         updatedNode=tree.items.map((ob)=>{
        return renameNode(ob,folderId,newName)
         })
         return {...tree,items:updatedNode}
  }; 
  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;


