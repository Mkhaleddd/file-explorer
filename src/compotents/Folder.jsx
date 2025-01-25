import React, { useState } from "react";

const Folder = ({ obj, setItems }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({ visible: false, isFolder: true });
  const [editState, setEditState] = useState({ id: null, value: "" });
  const [items, setItemsState] = useState(obj.items); 

  function handleToggle(e) {
    e.stopPropagation();
    setExpand(!expand);
  }

  function handleInput(e, isFolder) {
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
  }

  function addFilOrFolder(e) {
    if (e.key === "Enter" && e.target.value) {
      const newItem = {
        id: Date.now().toString(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        items: showInput.isFolder ? [] : null,
      };
      setItemsState([newItem, ...items]);
      setExpand(true);
      setShowInput({ visible: false, isFolder: true });
      e.target.value = "";
    }
  }

  function startEdit(e, item) {
    e.stopPropagation();
    setEditState({ id: item.id, value: item.name });
  }

  function handleEditChange(e) {
    setEditState({ ...editState, value: e.target.value });
  }

  function saveEdit(e) {
    if (e.key === "Enter" && editState.value) {
      const updatedItems = items.map(item =>
        item.id === editState.id ? { ...item, name: editState.value } : item
      );
      setItemsState(updatedItems); 
      setEditState({ id: null, value: "" });
    }
  }

  function exitEdit() {
    setEditState({ id: null, value: "" });
  }

  const remove = (e, id) => {
    e.stopPropagation();
    const updatedItems = items.filter(item => item.id !== id);
    setItemsState(updatedItems); 

    if (obj.isFolder) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  };

  return (
    <>
      {obj.isFolder ? (
        <div
          onClick={(e) => handleToggle(e)}
          style={{
            paddingLeft: "10px",
            marginBottom: "5px",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#0057D9" }}>📂 {obj.name}</span>
          <span
            onClick={(e) => startEdit(e, obj)}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            ✏️
          </span>
          <span
            onClick={(e) => remove(e, obj.id)}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            <i className="fas fa-trash-alt" style={{ fontSize: "16px", color: "#000000" }}></i>
          </span>
          {editState.id === obj.id && (
            <input
              value={editState.value}
              onChange={handleEditChange}
              onKeyDown={(e) => saveEdit(e)}
              onBlur={exitEdit}
              autoFocus
              style={{
                marginLeft: "10px",
                padding: "3px 5px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}
          <span style={{ marginLeft: "10px" }}>
            <button
              onClick={(e) => handleInput(e, false)}
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                background: "#f0f0f0",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              +file
            </button>
            <button
              onClick={(e) => handleInput(e, true)}
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                background: "#f0f0f0",
                cursor: "pointer",
              }}
            >
              +folder
            </button>
            {showInput.visible && (
              <input
                type="text"
                onKeyDown={(e) => addFilOrFolder(e)}
                onBlur={() => setShowInput({ visible: false, isFolder: true })}
                autoFocus
                style={{
                  marginLeft: "10px",
                  padding: "3px 5px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            )}
          </span>
          {expand &&
            items.map((ob) => (
              <div key={ob.id} style={{ paddingLeft: "10px" }}>
                {ob.isFolder ? (
                  <Folder obj={ob} setItems={setItemsState} /> // Pass setItems here
                ) : (
                  <>
                    <span
                      style={{
                        color: "#333",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      📄 {ob.name}
                    </span>
                    <span
                      onClick={(e) => startEdit(e, ob)}
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      ✏️
                    </span>
                    <span
                      onClick={(e) => remove(e, ob.id)}
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      <i className="fas fa-trash-alt" style={{ fontSize: "16px", color: "#000000" }}></i>
                    </span>
                    {editState.id === ob.id && (
                      <input
                        value={editState.value}
                        onChange={handleEditChange}
                        onKeyDown={(e) => saveEdit(e)}
                        onBlur={exitEdit}
                        autoFocus
                        style={{
                          marginLeft: "10px",
                          padding: "3px 5px",
                          fontSize: "14px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
        </div>
      ) : (
        <div>
          📄 {obj.name}
          <span
            onClick={(e) => startEdit(e, obj)}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            ✏️
          </span>
          <span
            onClick={(e) => remove(e, obj.id)}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            <i className="fas fa-trash-alt" style={{ fontSize: "16px", color: "#000000" }}></i> 
          </span>
          {editState.id === obj.id && (
            <input
              value={editState.value}
              onChange={handleEditChange}
              onKeyDown={(e) => saveEdit(e)}
              onBlur={exitEdit}
              autoFocus
              style={{
                marginLeft: "10px",
                padding: "3px 5px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Folder;
