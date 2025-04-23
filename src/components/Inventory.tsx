
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

type InventoryProps = {
  items: string[];
  removeFromInventory: (item: string) => void;
};

const Inventory = ({ items, removeFromInventory }: InventoryProps) => {
  // Объект для хранения иконок предметов
  const itemIcons: Record<string, string> = {
    'яблоко': '🍎',
    'сыр': '🧀',
    'молоко': '🥛',
    'тарелка': '🍽️',
    'чашка': '☕',
    'нож': '🔪',
    'одежда': '👕',
    'книга': '📚',
    'кошелек': '👛',
    'фото': '🖼️',
    'игрушка': '🧸',
    'ручка': '✏️',
    'ноутбук': '💻',
    'тетрадь': '📓',
    'зубная щетка': '🪥',
    'полотенце': '🧖',
    'мыло': '🧼',
    'пульт': '🎮',
    'ваза': '🏺',
    'журнал': '📰',
    'фотоальбом': '📔',
  };

  const getItemIcon = (item: string) => {
    return itemIcons[item] || '📦';
  };

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <span className="mr-2">🎒</span> Инвентарь
        </h3>
        <Badge variant="outline" className="ml-2">
          {items.length} / 10
        </Badge>
      </div>
      
      {items.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          <p className="text-center">Ваш инвентарь пуст.<br/>Соберите предметы в комнатах.</p>
        </div>
      ) : (
        <ScrollArea className="flex-1 -mx-2 px-2">
          <div className="space-y-2 pb-2">
            {items.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center justify-between p-2 bg-accent/50 rounded-lg animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getItemIcon(item)}</span>
                  <span>{item}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => removeFromInventory(item)}
                >
                  ✖
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default Inventory;
