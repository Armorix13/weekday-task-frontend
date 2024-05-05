import React from "react";
import "./sidebarItem.css";
import { useSelector } from "react-redux";

export function SidebarItem({ icon, text, active, alert }) {
  const expanded = useSelector((state) => state.company.expanded);

  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <div>{icon}</div>
      <span className={`detailss`}>{expanded ? text : ""}</span>
      {!expanded && <div className="details">{text}</div>}
    </li>
  );
}
