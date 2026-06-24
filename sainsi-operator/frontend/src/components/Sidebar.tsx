'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  LayoutDashboard,
  Radio,
  Car,
  CalendarDays,
  Calendar,
  BarChart3,
  DollarSign,
  Star,
  Image as ImageIcon,
  Tags,
  User,
  Settings
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Live Requests', href: '/live-requests', icon: Radio },
  { name: 'Fleet Management', href: '/fleet', icon: Car },
  { name: 'Bookings', href: '/bookings', icon: CalendarDays },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Earnings', href: '/earnings', icon: DollarSign },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Media Gallery', href: '/media', icon: ImageIcon },
  { name: 'Pricing', href: '/pricing', icon: Tags },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-black border-r border-gray-800">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold tracking-wider text-white">SAINSI</span>
        <span className="ml-2 rounded bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/20">OPERATOR</span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-4 pb-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? 'bg-gray-800/50 text-white'
                    : 'text-gray-400 hover:bg-gray-800/30 hover:text-white',
                  'group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors'
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-300',
                    'mr-3 h-5 w-5 flex-shrink-0 transition-colors'
                  )}
                  aria-hidden="true"
                />
                {item.name}
                {item.name === 'Live Requests' && (
                  <span className="ml-auto inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
