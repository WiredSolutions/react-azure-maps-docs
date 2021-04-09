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
        url: "/"
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
      },
      {
        label: "Datasources",
        url: "/datasources",
        children: [
          {
            label: "GeoJSON Datasource",
            url: "#geojson"
          },
          {
            label: "VectorTile Datasource",
            url: "#vector"
          }
        ]
      }
    ]
  },
  {
    groupName: "Examples",
    group: [
      {
        label: "Default map",
        url: "/default-map",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },
      {
        label: "Map Ref",
        url: "/map-ref",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },{
        label: "Live with NEXT.JS",
        url: "/live-example-map",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },
      {
        label: "Layers",
        url: "/layers",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },
      {
        label: "Bubble layer",
        url: "/bubble-layer",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Markers",
        url: "/markers",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Shape",
        url: "/shape",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Popup",
        url: "/popup",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Route",
        url: "/route",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Arrow lines & Image Sprite",
        url: "/image-sprite",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Style Controls",
        url: "/controls",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },
      {
        label: "Chronopleth map",
        url: "/chronopleth",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      },
      {
        label: "Custom Control",
        url: "/custom-control",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
          }
        ]
      }, {
        label: "Async pin position",
        url: "/async",
        children: [
          {
            label: "Usage",
            url: "#usage"
          },
          {
            label: "Code",
            url: "#code"
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
        <Group key={group.groupName} linkGroup={group}/>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
