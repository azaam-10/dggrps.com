
// Import React to resolve namespace issues for ReactNode
import React from 'react';

export type NavItem = 'home' | 'service' | 'menu' | 'record' | 'mine';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}
