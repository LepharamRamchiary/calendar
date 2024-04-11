document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendarBody");
    const calendarTitle = document.getElementById("calendarTitle");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    renderCalendar(currentYear, currentMonth);

    prevBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    function renderCalendar(year, month) {
        calendarBody.innerHTML = "";
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December",
        ];
        calendarTitle.textContent = `${monthNames[month]} ${year}`;

        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (let i = 0; i < dayNames.length; i++) {
            const dayHeader = document.createElement("div");
            dayHeader.classList.add("day-cell");
            dayHeader.textContent = dayNames[i];
            calendarBody.appendChild(dayHeader);
        }

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("day-cell");
            calendarBody.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateCell = document.createElement("div");
            dateCell.classList.add("day-cell");
            dateCell.innerHTML = `<span class="date">${day}</span>`;
            calendarBody.appendChild(dateCell);
            const today = new Date();
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                dateCell.classList.add("today");
            }
        }
    }


});