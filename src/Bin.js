import React from 'react';
import { useDrop } from 'react-dnd';

const Bin = ({ binnedItems, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (draggedItem) => onDrop(draggedItem.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  const backgroundColor = isActive ? 'bg-green-200' : 'bg-gray-100';

  return (
    <div
      ref={drop}
      className={`border-2 border-dashed h-48 p-4 rounded shadow ${backgroundColor}`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Bin</h2>
      {binnedItems.length === 0 ? (
        <p className="text-center text-gray-500">Drag items here</p>
      ) : (
        binnedItems.map((item, index) => (
          <div key={index} className="border p-4 mb-2 bg-white rounded shadow">
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default Bin;
