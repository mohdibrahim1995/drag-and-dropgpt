import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { name: item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`border p-4 mb-4 bg-white rounded shadow cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {item}
    </div>
  );
};

export default DraggableItem;
