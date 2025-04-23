
import { Progress } from "@/components/ui/progress";

type CharacterProps = {
  stats: {
    hunger: number;
    cleanliness: number;
    energy: number;
    mood: number;
  };
};

const Character = ({ stats }: CharacterProps) => {
  const getProgressColor = (value: number) => {
    if (value > 70) return "bg-green-500";
    if (value > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full md:w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <span className="text-xl mr-2">👤</span> Состояние персонажа
      </h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="flex items-center">
              <span className="mr-1">🍔</span> Голод
            </span>
            <span className="font-medium">{stats.hunger}%</span>
          </div>
          <Progress value={stats.hunger} className="h-2.5 overflow-hidden rounded-full">
            <div 
              className={`h-full transition-all ${getProgressColor(stats.hunger)}`} 
              style={{ width: `${stats.hunger}%` }}
            />
          </Progress>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="flex items-center">
              <span className="mr-1">🧼</span> Чистота
            </span>
            <span className="font-medium">{stats.cleanliness}%</span>
          </div>
          <Progress value={stats.cleanliness} className="h-2.5 overflow-hidden rounded-full">
            <div 
              className={`h-full transition-all ${getProgressColor(stats.cleanliness)}`} 
              style={{ width: `${stats.cleanliness}%` }}
            />
          </Progress>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="flex items-center">
              <span className="mr-1">⚡</span> Энергия
            </span>
            <span className="font-medium">{stats.energy}%</span>
          </div>
          <Progress value={stats.energy} className="h-2.5 overflow-hidden rounded-full">
            <div 
              className={`h-full transition-all ${getProgressColor(stats.energy)}`} 
              style={{ width: `${stats.energy}%` }}
            />
          </Progress>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="flex items-center">
              <span className="mr-1">😊</span> Настроение
            </span>
            <span className="font-medium">{stats.mood}%</span>
          </div>
          <Progress value={stats.mood} className="h-2.5 overflow-hidden rounded-full">
            <div 
              className={`h-full transition-all ${getProgressColor(stats.mood)}`} 
              style={{ width: `${stats.mood}%` }}
            />
          </Progress>
        </div>
      </div>
    </div>
  );
};

export default Character;
