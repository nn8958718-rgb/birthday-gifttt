
const screens = [...document.querySelectorAll('.screen')];

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === id);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Move between birthday pages
document.querySelectorAll('[data-next]').forEach(button => {
  button.addEventListener('click', () => {
    showScreen(button.dataset.next);
  });
});

// Open the first envelope and show balloons and flowers
const openEnvelope = document.getElementById('open-envelope');
const effects = document.getElementById('envelope-effects');

openEnvelope.addEventListener('click', () => {
  if (openEnvelope.dataset.opened === 'true') return;

  openEnvelope.dataset.opened = 'true';

  const decorations = [
    '🎈', '🌸', '🌷', '💐',
    '🎈', '🌹', '✨', '🎈'
  ];

  decorations.forEach((decoration, index) => {
    const item = document.createElement('span');

    item.className = 'pop-item';
    item.textContent = decoration;
    item.style.left = `${8 + index * 11}%`;
    item.style.animationDelay = `${index * 0.12}s`;

    effects.appendChild(item);
  });

  openEnvelope.querySelector('span').textContent =
    'A little magic for you…';

  setTimeout(() => {
    showScreen('cake-screen');
  }, 2600);
});

// Create exactly 19 birthday candles
const candlesGrid = document.getElementById('candles-grid');

if (candlesGrid) {
  for (let i = 0; i < 19; i++) {
    const candle = document.createElement('span');
    candle.className = 'candle';

    const flame = document.createElement('span');
    flame.className = 'flame';

    candle.appendChild(flame);
    candlesGrid.appendChild(candle);
  }
}

// Blow the candles and make a wish
const blowButton = document.getElementById('blow-candles');

if (blowButton) {
  blowButton.addEventListener('click', () => {
    if (candlesGrid.classList.contains('blown')) return;

    candlesGrid.classList.add('blown');

    const wishMessage =
      document.getElementById('wish-message');

    wishMessage.textContent =
      'I hope every wish in your heart comes true. ♡';

    wishMessage.classList.add('wished');

    blowButton.textContent =
      'Your wish is on its way ♡';

    blowButton.disabled = true;

    document.getElementById('after-wish')
      .classList.remove('hidden');
  });
}
