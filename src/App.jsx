import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OnlineOptions from './pages/OnlineOptions';
import RoomPage from './pages/RoomPage';
import Game from './pages/Game';
import OfflinePlay from './pages/offlinePlay';
import Computer from './pages/Computer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<OnlineOptions />} />
        <Route path="/offline" element={<OfflinePlay />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/game/:roomId" element={<Game />} />
      </Routes>
    </Router>
  );
}
export default App;
