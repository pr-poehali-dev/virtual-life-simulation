
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Motion, AnimatePresence } from '@/components/ui/motion';

type RoomProps = {
  type: 'bedroom' | 'kitchen' | 'bathroom' | 'livingroom';
  addToInventory: (item: string) => void;
  performAction: (action: string) => void;
};

const Room = ({ type, addToInventory, performAction }: RoomProps) => {
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);

  const roomItems = {
    bedroom: [
      { id: 'bed', name: 'Кровать', actions: ['sleep'], icon: '🛏️' },
      { id: 'wardrobe', name: 'Шкаф', items: ['одежда', 'книга', 'кошелек'], icon: '🪟' },
      { id: 'shelf', name: 'Полка', items: ['фото', 'игрушка', 'ручка'], icon: '📚' },
      { id: 'table', name: 'Стол', items: ['ноутбук', 'тетрадь'], icon: '🪑' },
    ],
    kitchen: [
      { id: 'fridge', name: 'Холодильник', items: ['яблоко', 'сыр', 'молоко'], icon: '🧊' },
      { id: 'stove', name: 'Плита', actions: ['cook'], icon: '🍳' },
      { id: 'table', name: 'Кухонный стол', actions: ['eat'], icon: '🍽️' },
      { id: 'cupboard', name: 'Шкафчик', items: ['тарелка', 'чашка', 'нож'], icon: '🪑' },
    ],
    bathroom: [
      { id: 'sink', name: 'Раковина', actions: ['washHands'], icon: '🚰' },
      { id: 'shower', name: 'Душ', actions: ['takeShower'], icon: '🚿' },
      { id: 'cabinet', name: 'Шкафчик', items: ['зубная щетка', 'полотенце', 'мыло'], icon: '🗄️' },
      { id: 'toilet', name: 'Туалет', actions: ['useToilet'], icon: '🚽' },
    ],
    livingroom: [
      { id: 'sofa', name: 'Диван', actions: ['rest'], icon: '🛋️' },
      { id: 'tv', name: 'Телевизор', actions: ['watchTV'], icon: '📺' },
      { id: 'bookshelf', name: 'Книжный шкаф', items: ['книга', 'журнал', 'фотоальбом'], icon: '📚' },
      { id: 'coffeeTable', name: 'Журнальный столик', items: ['пульт', 'ваза'], icon: '🪑' },
    ],
  };

  const roomClasses = {
    bedroom: 'room-bedroom',
    kitchen: 'room-kitchen',
    bathroom: 'room-bathroom',
    livingroom: 'room-livingroom',
  };

  const roomTitles = {
    bedroom: 'Спальня',
    kitchen: 'Кухня',
    bathroom: 'Ванная',
    livingroom: 'Гостиная',
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
    <div className={`${roomClasses[type]} p-6 rounded-xl h-full relative shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        {roomTitles[type]}
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {roomItems[type].map((item) => (
          <Card 
            key={item.id} 
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary ${showActionMenu === item.id ? 'border-primary ring-1 ring-primary' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div className="font-medium">{item.name}</div>
            </div>
            
            {showActionMenu === item.id && (
              <div className="mt-3 space-y-2 animate-fade-in">
                {item.items && item.items.map((subItem) => (
                  <Button 
                    key={subItem} 
                    variant="outline" 
                    size="sm" 
                    className="w-full transition-all hover:bg-primary hover:text-white"
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
                    className="w-full transition-all hover:bg-primary hover:text-white"
                    onClick={() => handleAction(action)}
                  >
                    {getActionName(action)}
                  </Button>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
      
      <div className="absolute bottom-6 right-6">
        <div className="w-16 h-32 bg-primary rounded-full relative animate-float">
          {/* Простое изображение персонажа */}
          <div className="w-10 h-10 bg-yellow-200 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-full text-center -bottom-6 font-medium text-primary-foreground">Вы</div>
        </div>
      </div>
    </div>
  );
};

export default Room;
