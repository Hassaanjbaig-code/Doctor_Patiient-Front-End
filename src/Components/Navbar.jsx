import React from "react";
import Mcare from "../assets/Mcare logo.png";
import {
  MdOutlineDashboardCustomize,
  MdOutlineMedicalServices,
  MdReportProblem,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiMedicines } from "react-icons/gi";
import { Link, BrowserRouter } from "react-router-dom";

const navbar = [
  {
    name: "Overview",
    icon: MdOutlineDashboardCustomize,
    path: "/",
  },
  {
    name: "Appointments",
    icon: SlCalender,
    path: "/Appointments",
  },
  {
    name: "Doctor",
    icon: MdOutlineMedicalServices,
    path: "/Doctor",
  },
  {
    name: "Medicines",
    icon: GiMedicines,
    path: "/Medicines",
  },
  {
    name: "Issues with App",
    icon: MdReportProblem,
    path: "/Report",
  },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <span className="w-48 ">
        <img src={Mcare} alt="Mcare" />
      </span>
      <hr />
      <ul className="Navbar">
        {navbar.map((item, index) => (
          <li key={index} className={`navI_${index}`}>
            <Link to={item.path}>
              <span>
                <item.icon /> {/* Render the icon */}
              </span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
