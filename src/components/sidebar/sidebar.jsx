import React from "react";
import Sidebar from "./module";
import data from "../../data/nav.json";

const navActive = "users";
const SidebarTampan = () => {
  return (
    <Sidebar>
      <Sidebar.Header
        title="CRM APP"
        imageUrl="http://pomona-newcms-stage.s3-website-ap-southeast-1.amazonaws.com/static/media/image/svg/pomona-blue-logo-only.svg"
      />
      <Sidebar.Menu
        active={navActive}
        onClick={url => console.log("nav clicked", url)}
      >
        {data.rows.map(item => {
          if (item.menu.length) {
            return <Sidebar.Collapse key={item.id} data={item} />;
          }
          return <Sidebar.Item key={item.id} item={item} />;
        })}
      </Sidebar.Menu>
      <Sidebar.Footer
        title="Agung"
        subtitle="Frontend Developer"
        logoutClick={() => console.log("clicked")}
      />
    </Sidebar>
  );
};

export default SidebarTampan;
