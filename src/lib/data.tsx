import { LayoutDashboard, WorkflowIcon, Group, Star, Joystick, LogOut } from 'lucide-react';
import { SidebarItem } from "./@types";

export const sidebarLinks: SidebarItem[] = [
    { icon: LayoutDashboard, href: '/', label: 'Your Dashboard' },
    { icon: WorkflowIcon, href: '/', label: 'Workroom' },
    { icon: Group, href: '/', label: 'Your team' },
    { icon: Star, href: '/', label: 'Leaderboards' },
    { icon: Joystick, href: '/', label: 'Your task' },
    { icon: LogOut, href: '/', label: 'Clock out' },
  ];