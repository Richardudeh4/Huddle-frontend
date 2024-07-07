import { LayoutDashboard, WorkflowIcon, Group, Star, Joystick, LogOut } from 'lucide-react';
import { SidebarItem } from "../lib/@types";

export const sidebarLinks: SidebarItem[] = [
    { icon: LayoutDashboard, href: '/dashboard', label: 'Your Dashboard' },
    { icon: WorkflowIcon, href: '/workroom', label: 'Workroom' },
    { icon: Group, href: '/your-team', label: 'Your team' },
    { icon: Star, href: '/leaderboards', label: 'Leaderboards' },
    { icon: Joystick, href: '/your-task', label: 'Your task' },
    { icon: LogOut, href: '#', label: 'Clock out' },
  ];