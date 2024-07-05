export interface SidebarItem {
    icon: React.ComponentType;
    href: string;
    label: string;
  }

  export interface SidebarProps {
    name: string;
    email: string;
    online?: boolean;
  }