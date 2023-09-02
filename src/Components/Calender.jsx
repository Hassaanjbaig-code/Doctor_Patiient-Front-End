import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
const Appointments = [
  {
    id: 1,
    name: "John Doe",
    startDatetime: "2023-08-29T02:35:00",
    endDatetime: "2021-10-01T03:35:00",
  },
  {
    id: 2,
    name: "Jane Doe",
    startDatetime: "2023-08-30T10:00",
    endDatetime: "2023-08-30T11:00",
  },
  // {
  //   id: 1,
  //   name: "Leslie Alexander",
  //   startDatetime: "2023-08-29T13:00",
  //   endDatetime: "2023-08-29T14:30",
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date()); // Get the first day of the month for the selected date and going to the next month

  // Conter the number of days in the month
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  // Filter out the Appointments for the selected day
  let selectedDayMeetings = Appointments.filter((Appointment) =>
    isSameDay(parseISO(Appointment.startDatetime), selectedDay)
  );

  return (
    <div className="pt-9">
      <div className="max-w-md p-2 mx-auto sm:px-7 md:max-w-[45rem] md:px-6  border rounded-lg shadow-lg bg-parimary">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {Appointments.some((Appointment) =>
                      isSameDay(parseISO(Appointment.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((appointment) => (
                  <DoctorAppointment
                    Appointment={appointment}
                    key={appointment.id}
                  />
                ))
              ) : (
                <p>No Appointmentss for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

// For the appointment
function DoctorAppointment({ Appointment }) {
  let startDateTime = parseISO(Appointment.startDatetime);
  let endDateTime = parseISO(Appointment.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <div className="flex-auto">
        <p className="text-gray-900">{Appointment.name}</p>
        <p className="mt-0.5">
          <time dateTime={Appointment.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={Appointment.endDatetime}>
            {" "}
            {/* {"For the convert the time to 12 hour format"} */}
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      {/* For editing the time for the appointment */}
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

// This is a helper array which you to target the Month starting date
// if the started date of the next month is wed or any day ot start the next month with that day

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
