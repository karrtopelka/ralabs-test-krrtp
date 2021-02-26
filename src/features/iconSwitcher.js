const {
  Sun,
  Cloud,
  CloudSnow,
  CloudRain,
  AlignCenter,
} = require('@geist-ui/react-icons');
export default function iconSwitcher(w) {
  switch (w) {
    case 'Snow':
      return <CloudSnow size={48} />;
    case 'Clouds':
      return <Cloud size={48} />;
    case 'Sunny':
      return <Sun size={48} />;
    case 'Rain':
      return <CloudRain size={48} />;
    case 'Clear':
      return <Sun size={48} />;
    case 'Mist':
      return <AlignCenter size={48} />;
    default:
      return <Sun size={48} />;
  }
}
