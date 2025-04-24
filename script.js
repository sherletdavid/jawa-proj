const container = document.querySelector('.seating');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('bookBtn');
const confirmation = document.getElementById('confirmation');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
    confirmation.innerText = ''; // clear confirmation if changing seats
  }
});

// Movie change event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
  confirmation.innerText = ''; // clear confirmation
});

// Book button click event
bookBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedCount = selectedSeats.length;

  if (selectedCount === 0) {
    confirmation.innerText = 'Please select at least one seat to book.';
    confirmation.style.color = 'orange';
  } else {
    selectedSeats.forEach(seat => {
      seat.classList.remove('selected');
      seat.classList.add('occupied');
    });
    updateSelectedCount();
    confirmation.innerText = '🎉 Booking confirmed! Enjoy your movie.';
    confirmation.style.color = '#00ffcc';
  }
});
