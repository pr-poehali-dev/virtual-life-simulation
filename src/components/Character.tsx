
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
  return (
    <div className="w-64 p-3 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Состояние персонажа</h3>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Голод</span>
            <span>{stats.hunger}%</span>
          </div>
          <Progress value={stats.hunger} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Чистота</span>
            <span>{stats.cleanliness}%</span>
          </div>
          <Progress value={stats.cleanliness} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Энергия</span>
            <span>{stats.energy}%</span>
          </div>
          <Progress value={stats.energy} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Настроение</span>
            <span>{stats.mood}%</span>
          </div>
          <Progress value={stats.mood} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default Character;
