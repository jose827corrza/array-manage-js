const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  // Mi respuesta
  const rta = calendars.primaryCalendar
    .flatMap(appointment => appointment.startDate)
    .concat(calendars.secondaryCalendar
        .flatMap(appointment => appointment.startDate));

    // respuesta NicoBytes
    const rta2 = Object.values(calendars).flatMap(item => {
      return item.map(event => event.startDate)
    })
  console.log('jose',rta);
  console.log('nico', rta2);