import data from "./compotents/data";
import "./App.css";
import Folder from "./compotents/Folder";
import React from "react";
import useTraverseTree from "./hooks/useTraverseTree"
export default function App() {
  const [dataEx, setDataEx] = React.useState(data);
  const { insertNode, deleteNode,renameNode } = useTraverseTree();

  function handleInsertNode(folderId, item, isFolder) {
    const finalTree = insertNode(dataEx, folderId, item, isFolder)
    setDataEx(finalTree)
  }
  function handleDeleteNode(folderId) {
    const deletedTree = deleteNode(dataEx,folderId)
    setDataEx(deletedTree)
  }
  function handleRename(folderId,newName){
    const updatedTree = renameNode(dataEx,folderId,newName)
    setDataEx(updatedTree)
  }
  return (
    <div className="App">
      <Folder exp={dataEx}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleRename={handleRename}
        key={data.id}
      />
    </div>
  );
}
