import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/sidebar.scss";

const menuGroups = [
  {
    groupName: "Getting Started",
    group: [
      {
        label: "Introduction",
        url: "/introduction",
      },
      {
        label: "Installation",
        url: "/installation",
        children: [
          {
            label: "npm",
            url: "#npm"
          },
          {
            label: "yarn",
            url: "#yarn"
          },
          {
            label: "Basic usage",
            url: "#usage"
          }
        ]
      }
    ]
  },
  {
    groupName: "Components",
    group: [
      {
        label: "Default map",
        url: "/default-map"
      },
      {
        label: "foo",
        url: "/foo"
      },
      {
        subGroupName: "Layers",
        subGroup: [
          {
            label: "bar",
            url: "#bar"
          }
        ]
      }
    ]
  }
];

const ChildrenLinks = ({ children }) => (
  <ul>
    {children &&
      children.map(({ label, url }) => (
        <li key={label}>
          <Link href={url}>
            <a className="sidebar__link sidebar__link--subgroup">{label}</a>
          </Link>
        </li>
      ))}
  </ul>
);
const SubGroup = ({ subGroup, subGroupName }) => (
  <ul>
    <div className="sidebar__subGroupName">{subGroupName}</div>
    {subGroup.map(({ url, label, children }) => (
      <li key={label}>
        <Link href={url}>
          <a className="sidebar__link sidebar__link--subgroup">{label}</a>
        </Link>
        <ChildrenLinks children={children} />
      </li>
    ))}
  </ul>
);

const Group = ({ linkGroup }) => {
  const router = useRouter();

  return (
    <li className="sidebar__group">
      <div className="sidebar__groupName">{linkGroup.groupName}</div>
      <ul>
        {linkGroup.group.map(
          ({ label, url, children, subGroup, subGroupName }) =>
            subGroup ? (
              <SubGroup
                key={label}
                subGroup={subGroup}
                subGroupName={subGroupName}
              />
            ) : (
              <li
                key={label}
                className={router.pathname === url ? "active" : ""}
              >
                <Link href={url}>
                  <a className="sidebar__link">{label}</a>
                </Link>
                {router.pathname === url && (
                  <ChildrenLinks children={children} />
                )}
              </li>
            )
        )}
      </ul>
    </li>
  );
};

const Sidebar = () => (
  <nav className="sidebar">
    <ul className="sidebar__links">
      {menuGroups.map(group => (
        <Group key={group.groupName} linkGroup={group}></Group>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
