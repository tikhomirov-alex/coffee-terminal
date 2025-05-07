export const getRandomTime = () => {
  return Math.floor(Math.random() * 10) + 5; // Время приготовления напитка от 5 до 15 секунд
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};