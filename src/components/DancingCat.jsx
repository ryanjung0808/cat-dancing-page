import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('bounce');

  const danceStyles = [
    { id: 'bounce', name: '통통 점프', icon: '🦘' },
    { id: 'spin', name: '빙글빙글', icon: '🌀' },
    { id: 'shake', name: '흔들흔들', icon: '💃' },
    { id: 'disco', name: '디스코', icon: '🕺' },
  ];

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const changeDanceStyle = (style) => {
    setDanceStyle(style);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>

      <div className="stage">
        <div className="disco-ball"></div>
        <div className="floor-lights">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`cat-wrapper ${isPlaying ? danceStyle : 'paused'}`}
          onClick={toggleAnimation}
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 재생'}
          onKeyDown={(e) => e.key === 'Enter' && toggleAnimation()}
        >
          <img
            src={catImage}
            alt="춤추는 고양이"
            className="cat-image"
          />
          <div className="shadow"></div>
        </div>
      </div>

      <div className="controls">
        <button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={toggleAnimation}
          aria-label={isPlaying ? '정지' : '재생'}
        >
          {isPlaying ? '⏸ 정지' : '▶ 재생'}
        </button>

        <div className="dance-styles">
          {danceStyles.map((style) => (
            <button
              key={style.id}
              className={`style-button ${danceStyle === style.id ? 'active' : ''}`}
              onClick={() => changeDanceStyle(style.id)}
              aria-label={`${style.name} 스타일로 변경`}
            >
              <span className="icon">{style.icon}</span>
              <span className="name">{style.name}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="hint">고양이를 클릭하면 춤을 멈춰요!</p>
    </div>
  );
}

export default DancingCat;
