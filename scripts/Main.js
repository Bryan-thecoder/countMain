const giveawaydate = new Date('2024-03-09').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();

    const distance = giveawaydate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days_left').innerHTML = `${days} Days`;
    document.getElementById('hours_left').innerHTML = `${hours} hours`;
    document.getElementById('mins_left').innerHTML = `${minutes} minutes`;
    document.getElementById('secs_left').innerHTML = `${seconds} seconds`;

    if(distance < 10000000){
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'the Giveaway has Ended'

    }
}, 1000);

