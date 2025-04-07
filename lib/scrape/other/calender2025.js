const { createCanvas } = require('canvas');
const moment = require('moment-timezone');

const generateCalendar2025 = async (text) => {
    const timezone = 'Asia/Jakarta';
    const currentDate = moment.tz(timezone);
    const currentMonth = currentDate.month();
    const currentYear = currentDate.year();
    const today = currentDate.date();

    const months = [
        'januari', 'februari', 'maret', 'april', 'mei', 'juni',
        'juli', 'agustus', 'september', 'oktober', 'november', 'desember',
    ];
    
    let queryMonth = months.findIndex((month) => month.toLowerCase() === text.toLowerCase());
    if (queryMonth === -1) queryMonth = currentMonth;

    const displayDate = moment.tz(timezone).month(queryMonth).startOf('month');
    const monthName = months[queryMonth];

    const holidays = [
        { date: '2025-01-01', description: 'Tahun Baru 2025 Masehi' },
        { date: '2025-01-27', description: 'Isra Mikraj Nabi Muhammad SAW' },
        { date: '2025-01-29', description: 'Tahun Baru Imlek 2576 Kongzili' },
        { date: '2025-03-29', description: 'Hari Suci Nyepi Tahun Baru Saka 1947' },
        { date: '2025-03-31', description: 'Hari Raya Idulfitri 1446 Hijriah' },
        { date: '2025-04-01', description: 'Hari Raya Idulfitri 1446 Hijriah' },
        { date: '2025-04-18', description: 'Wafat Yesus Kristus' },
        { date: '2025-05-01', description: 'Hari Buruh Internasional' },
        { date: '2025-05-12', description: 'Hari Raya Waisak 2569 BE' },
        { date: '2025-05-29', description: 'Kenaikan Isa Almasih' },
        { date: '2025-06-01', description: 'Hari Lahir Pancasila' },
        { date: '2025-06-07', description: 'Hari Raya Iduladha 1446 Hijriah' },
        { date: '2025-08-17', description: 'Hari Kemerdekaan Republik Indonesia' },
        { date: '2025-09-05', description: 'Maulid Nabi Muhammad SAW' },
        { date: '2025-12-25', description: 'Hari Raya Natal' },
        { date: '2025-01-28', description: 'Cuti Bersama Tahun Baru Imlek' },
        { date: '2025-03-28', description: 'Cuti Bersama Hari Suci Nyepi' },
        { date: '2025-04-02', description: 'Cuti Bersama Idulfitri 1446 Hijriah' },
        { date: '2025-04-03', description: 'Cuti Bersama Idulfitri 1446 Hijriah' },
        { date: '2025-04-04', description: 'Cuti Bersama Idulfitri 1446 Hijriah' },
        { date: '2025-12-26', description: 'Cuti Bersama Hari Raya Natal' },
    ];

    const holidaysThisMonth = holidays.filter(
        (holiday) => moment(holiday.date).month() === queryMonth
    );

    const daysInMonth = displayDate.daysInMonth();
    const firstDayOfMonth = displayDate.day();
    const canvasWidth = 700;
    const canvasHeight = 850;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = '#000000';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';

    ctx.fillText(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${currentYear}`, canvasWidth / 2, 50);

    const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    daysOfWeek.forEach((day, index) => {
        ctx.fillStyle = day === 'Min' ? '#ff0000' : '#000000';
        ctx.fillText(day, 100 + index * 80, 100);
    });

    let x = 100;
    let y = 150;

    for (let i = 0; i < firstDayOfMonth; i++) {
        x += 80;
    }

    for (let date = 1; date <= daysInMonth; date++) {
        const currentDay = (firstDayOfMonth + date - 1) % 7;

        if (queryMonth === currentMonth && date === today) {
            ctx.beginPath();
            ctx.arc(x, y - 10, 30, 0, 2 * Math.PI);
            ctx.strokeStyle = '#0000ff';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
        }

        const holiday = holidaysThisMonth.find((holiday) => moment(holiday.date).date() === date);

        if (holiday || currentDay === 0) {
            ctx.fillStyle = '#ff0000'; // Merah untuk hari libur atau hari Minggu
        } else {
            ctx.fillStyle = '#000000'; // Hitam untuk hari biasa
        }

        ctx.fillText(date.toString(), x, y); // Menampilkan tanggal

        x += 80; 
        if ((date + firstDayOfMonth) % 7 === 0) {
            x = 100; 
            y += 70; 
        }
    }

    // Menampilkan hari libur di bawah kalender
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    let textY = y + 70;
    holidaysThisMonth.forEach((holiday) => {
        ctx.fillStyle = '#ff0000';
        ctx.fillText(`${moment(holiday.date).format('DD MMMM YYYY')} - ${holiday.description}`, 50, textY);
        textY += 30; 
    });

    const buffer = canvas.toBuffer(); 
    return {
        image: buffer,
        caption: `Kalender Bulan ${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${currentYear}`,
    };
};

module.exports = { generateCalendar2025 };