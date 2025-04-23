
import { useState } from 'react';
import Room from './Room';
import Character from './Character';
import Inventory from './Inventory';

type RoomType = 'bedroom' | 'kitchen' | 'bathroom' | 'livingroom';

const GameScreen = () => {
  const [currentRoom, setCurrentRoom] = useState<RoomType>('bedroom');
  const [inventory, setInventory] = useState<string[]>([]);
  const [characterState, setCharacterState] = useState({
    hunger: 70,
    cleanliness: 80,
    energy: 60,
    mood: 75,
  });

  const addToInventory = (item: string) => {
    setInventory(prev => [...prev, item]);
  };

  const removeFromInventory = (item: string) => {
    setInventory(prev => prev.filter(i => i !== item));
  };

  const changeRoom = (room: RoomType) => {
    setCurrentRoom(room);
  };

  const performAction = (action: string) => {
    switch (action) {
      case 'eat':
        setCharacterState(prev => ({
          ...prev,
          hunger: Math.min(100, prev.hunger + 30),
          energy: Math.min(100, prev.energy + 10),
          mood: Math.min(100, prev.mood + 5),
        }));
        break;
      case 'washHands':
        setCharacterState(prev => ({
          ...prev,
          cleanliness: Math.min(100, prev.cleanliness + 15),
          mood: Math.min(100, prev.mood + 3),
        }));
        break;
      case 'takeShower':
        setCharacterState(prev => ({
          ...prev,
          cleanliness: Math.min(100, prev.cleanliness + 40),
          energy: Math.min(100, prev.energy + 5),
          mood: Math.min(100, prev.mood + 10),
        }));
        break;
      case 'sleep':
        setCharacterState(prev => ({
          ...prev,
          energy: 100,
          mood: Math.min(100, prev.mood + 15),
        }));
        break;
      case 'watchTV':
        setCharacterState(prev => ({
          ...prev,
          mood: Math.min(100, prev.mood + 20),
          energy: Math.max(0, prev.energy - 5),
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-screen max-w-6xl flex flex-col">
      <div className="flex justify-between p-4 bg-purple-100 rounded-lg mb-4">
        <Character stats={characterState} />
        <div className="flex gap-4">
          <button 
            className={`px-4 py-2 rounded-md ${currentRoom === 'bedroom' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
            onClick={() => changeRoom('bedroom')}
          >
            Спальня
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${currentRoom === 'kitchen' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
            onClick={() => changeRoom('kitchen')}
          >
            Кухня
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${currentRoom === 'bathroom' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
            onClick={() => changeRoom('bathroom')}
          >
            Ванная
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${currentRoom === 'livingroom' ? 'bg-purple-600 text-white' : 'bg-purple-200'}`}
            onClick={() => changeRoom('livingroom')}
          >
            Гостиная
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex">
        <div className="flex-1">
          <Room 
            type={currentRoom} 
            addToInventory={addToInventory} 
            performAction={performAction}
          />
        </div>
        <div className="w-64 bg-purple-50 p-4 rounded-lg">
          <Inventory items={inventory} removeFromInventory={removeFromInventory} />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
