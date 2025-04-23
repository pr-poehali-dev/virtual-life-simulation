
import { useState } from 'react';
import Room from './Room';
import Character from './Character';
import Inventory from './Inventory';
import { Button } from '@/components/ui/button'; 
import { Card } from '@/components/ui/card';

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

  const roomIcons = {
    bedroom: '🛏️',
    kitchen: '🍳',
    bathroom: '🚿',
    livingroom: '📺'
  };

  return (
    <div className="w-full min-h-screen max-w-6xl mx-auto p-4 flex flex-col">
      <Card className="p-4 mb-6 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Character stats={characterState} />
          
          <div className="flex flex-wrap gap-2">
            {Object.entries(roomIcons).map(([room, icon]) => (
              <Button 
                key={room}
                size="lg"
                variant={currentRoom === room ? "default" : "outline"}
                className={`px-4 py-2 transition-all ${currentRoom === room ? 'animate-pulse-soft' : ''}`}
                onClick={() => changeRoom(room as RoomType)}
              >
                <span className="mr-2">{icon}</span>
                {room === 'bedroom' && 'Спальня'}
                {room === 'kitchen' && 'Кухня'}
                {room === 'bathroom' && 'Ванная'}
                {room === 'livingroom' && 'Гостиная'}
              </Button>
            ))}
          </div>
        </div>
      </Card>
      
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Card className="h-full shadow-md overflow-hidden">
            <Room 
              type={currentRoom} 
              addToInventory={addToInventory} 
              performAction={performAction}
            />
          </Card>
        </div>
        <div className="w-full lg:w-80">
          <Card className="shadow-md h-full">
            <Inventory items={inventory} removeFromInventory={removeFromInventory} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
