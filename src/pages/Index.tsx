
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GameScreen from "@/components/GameScreen";

const Index = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50">
      {!isStarted ? (
        <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-lg max-w-md animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Симулятор жизни</h1>
          <p className="text-xl text-gray-600 mb-6">
            Проживите день вместе с персонажем. Исследуйте комнаты, взаимодействуйте с предметами и выполняйте повседневные задачи.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            onClick={handleStart}
          >
            Начать игру
          </Button>
        </div>
      ) : (
        <GameScreen />
      )}
    </div>
  );
};

export default Index;
