const refs = {
  timeSecond: document.querySelector('.time-selection'),
  timeText: document.querySelector('.form-time-text'),
  result: document.querySelector('.form-time-result'),
};

refs.timeSecond.addEventListener("submit", function (e) {
    e.preventDefault();
    const seconds = parseInt(refs.timeText.value);
    if (isNaN(seconds) || seconds < 0) {
      refs.result.textContent = alert('Будь ласка, введіть коректне число');
      return;
    }
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60 )
    const remainingSecond = seconds % 60;
    
    refs.result.textContent = `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSecond.toString().padStart(2, '0')}`;
});