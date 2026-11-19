/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export type ViewType = 'explore' | 'map' | 'archive' | 'gallery' | 'profile';

export interface ArchiveStat {
  label: string;
  value: string;
}

export interface AnalysisEntry {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  imageUrl: string;
  type: string;
}

export interface DebateEntry {
  id: string;
  tag: string;
  time: string;
  title: string;
  participants: number;
  replies: number;
  color: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'political' | 'military' | 'cultural';
}

export interface GalleryItem {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  likes: string;
  comments: string;
  tags: string[];
}
