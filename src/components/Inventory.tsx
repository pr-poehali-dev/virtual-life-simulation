
import { Button } from "@/components/ui/button";

type InventoryProps = {
  items: string[];
  removeFromInventory: (item: string) => void;
};

const Inventory = ({ items, removeFromInventory }: InventoryProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Инвентарь</h3>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">Инвентарь пуст</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="flex justify-between items-center bg-white p-2 rounded-md">
              <span>{item}</span>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-6 w-6 p-0"
                onClick={() => removeFromInventory(item)}
              >
                ✕
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
