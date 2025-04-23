
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type RoomProps = {
  type: 'bedroom' | 'kitchen' | 'bathroom' | 'livingroom';
  addToInventory: (item: string) => void;
  performAction: (action: string) => void;
};

const Room = ({ type, addToInventory, performAction }: RoomProps) => {
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);

  const roomItems = {
    bedroom: [
      { id: 'bed', name: 'Кровать', actions: ['sleep'] },
      { id: 'wardrobe', name: 'Шкаф', items: ['одежда', 'книга', 'кошелек'] },
      { id: 'shelf', name: 'Полка', items: ['фото', 'игрушка', 'ручка'] },
      { id: 'table', name: 'Стол', items: ['ноутбук', 'тетрадь'] },
    ],
    kitchen: [
      { id: 'fridge', name: 'Холодильник', items: ['яблоко', 'сыр', 'молоко'] },
      { id: 'stove', name: 'Плита', actions: ['cook'] },
      { id: 'table', name: 'Кухонный стол', actions: ['eat'] },
      { id: 'cupboard', name: 'Шкафчик', items: ['тарелка', 'чашка', 'нож'] },
    ],
    bathroom: [
      { id: 'sink', name: 'Раковина', actions: ['washHands'] },
      { id: 'shower', name: 'Душ', actions: ['takeShower'] },
      { id: 'cabinet', name: 'Шкафчик', items: ['зубная щетка', 'полотенце', 'мыло'] },
      { id: 'toilet', name: 'Туалет', actions: ['useToilet'] },
    ],
    livingroom: [
      { id: 'sofa', name: 'Диван', actions: ['rest'] },
      { id: 'tv', name: 'Телевизор', actions: ['watchTV'] },
      { id: 'bookshelf', name: 'Книжный шкаф', items: ['книга', 'журнал', 'фотоальбом'] },
      { id: 'coffeeTable', name: 'Журнальный столик', items: ['пульт', 'ваза'] },
    ],
  };

  const roomBackgrounds = {
    bedroom: 'bg-blue-100',
    kitchen: 'bg-yellow-100',
    bathroom: 'bg-cyan-100',
    livingroom: 'bg-green-100',
  };

  const handleItemClick = (itemId: string) => {
    setShowActionMenu(itemId === showActionMenu ? null : itemId);
  };

  const handleTakeItem = (item: string) => {
    addToInventory(item);
    setShowActionMenu(null);
  };

  const handleAction = (action: string) => {
    performAction(action);
    setShowActionMenu(null);
  };

  const getActionName = (action: string) => {
    const actionNames: Record<string, string> = {
      'sleep': 'Спать',
      'eat': 'Поесть',
      'washHands': 'Помыть руки',
      'takeShower': 'Принять душ',
      'cook': 'Готовить',
      'useToilet': 'Использовать',
      'rest': 'Отдохнуть',
      'watchTV': 'Смотреть ТВ'
    };
    return actionNames[action] || action;
  };

  return (
    <div className={`${roomBackgrounds[type]} p-6 rounded-lg h-full relative`}>
      <h2 className="text-2xl font-bold mb-6">
        {type === 'bedroom' && 'Спальня'}
        {type === 'kitchen' && 'Кухня'}
        {type === 'bathroom' && 'Ванная'}
        {type === 'livingroom' && 'Гостиная'}
      </h2>
      
      <div className="flex flex-wrap -mx-2">
        {roomItems[type].map((item) => (
          <div key={item.id} className="px-2 w-1/2 mb-4">
            <div 
              className="border border-gray-300 bg-white/80 rounded-lg p-4 h-full cursor-pointer hover:border-purple-400 transition-all"
              onClick={() => handleItemClick(item.id)}
            >
              <div className="font-medium">{item.name}</div>
              
              {showActionMenu === item.id && (
                <div className="mt-3 space-y-2 animate-fade-in">
                  {item.items && item.items.map((subItem) => (
                    <Button 
                      key={subItem} 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleTakeItem(subItem)}
                    >
                      Взять {subItem}
                    </Button>
                  ))}
                  
                  {item.actions && item.actions.map((action) => (
                    <Button 
                      key={action} 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleAction(action)}
                    >
                      {getActionName(action)}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4">
        <div className="w-12 h-24 bg-purple-600 rounded-full relative">
          {/* Простое изображение персонажа */}
          <div className="w-8 h-8 bg-yellow-200 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Room;
