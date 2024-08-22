import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Bin from './Bin';
import DraggableItem from './DraggableItem';

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [binnedItems, setBinnedItems] = useState([]);

  const handleDrop = (item) => {
    // Filter out the dropped item from the items list
    const newItems = items.filter(i => i !== item);
    setItems(newItems);
    // Add the dropped item to the binnedItems list
    setBinnedItems(prevBinnedItems => [...prevBinnedItems, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">React DnD Example</h1>
        <div className="flex space-x-6">
          <div className="w-1/2 bg-gray-100 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Draggable Items</h2>
            {items.length > 0 ? (
              items.map((item, index) => (
                <DraggableItem key={index} item={item} />
              ))
            ) : (
              <p className="text-center text-gray-500">No more items to drag</p>
            )}
          </div>
          <div className="w-1/2">
            <Bin binnedItems={binnedItems} onDrop={handleDrop} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
