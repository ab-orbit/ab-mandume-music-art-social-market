/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnalysisEntry, ArchiveStat, DebateEntry, GalleryItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'explore', label: 'Explore', icon: 'hub' },
  { id: 'map', label: 'Map', icon: 'map' },
  { id: 'archive', label: 'Archive', icon: 'inventory_2' },
  { id: 'gallery', label: 'Gallery', icon: 'palette' },
  { id: 'profile', label: 'Profile', icon: 'account_circle' },
];

export const IMAGES = {
  heroLibrary: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgD0aWmbhZBlX2MavRp-XNEDdZQau9YAkxxD-97bk_xSpOfE_Y6qA0NUI1-PI8iC1Q5KqseLm3C5-0K7okOu-GNRzlj91oSBf7PgXxVFr0QvDWCbWUA6MOJ9J3Tm0ftSSfPLR8GXYSX8Efmd8yfqrgnG3HPmEOFwWEHMxYJNKy-N8-aE1Ccmz5CCaBX0j0ugvzrr3nDxcbbGMcS7n-4MDH4YOvFK-3O2E-a3TExM-S2JOeZBP0nhOsvy4vz05Kgz35UbXh3nMa4Inx",
  journalHands: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6FIIyauT3ZWFCNc5eq6xfII8uNiqhvhTqfa5lRZEyj7MgDmHKdFIB-qI1WWddQcTKAag7Fu16vNLdMYGKP_RtlNMyFvw1mw_tFNNw76dkq1VDBx2Mq1HUdIxx7ttuHInq0246LDLy-xKpDwywGDEs2w2jhPqO7CzF2iAAC5e3b_nBaa0_LXORQDuJkdtXWtAo_p716wPnW0qUQ3vOWxoqEUuZFQ2_n3mhKB9JMHupOqesKdkd3C691Y4WkWXXREt8By6C5iCT1Xqe",
  dataNetwork: "https://lh3.googleusercontent.com/aida-public/AB6AXuANcsb3d1QYYbMwIN-bBXj7BjiHnu7kuCBTEYGyDZ-nI_Y2fkdAS4ZiSh5JNw812QmbdoK4IYqe9IX8uJuB7sfzW7BmJgEnRDsZ0D-ul1cRBoCZzBaEKIQOeNyxG1BAr8NsxspiKXvJTtZP7oIZ_PQVgyLJGbEEcJNSuG4IvZugfmUdyrAlGh-3j1ttIR-lePQBIdRfV2YuAJcn35LkjaamlFW19-1qov6hwj0O04ZZaebDAtFRE5RTo3gBxckYD7Tjc2cWl5JIQ7wW",
  museumSpace: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTnXJnixpke5fUTR2vJg1BPORVgmiVAvxz3NIigcDv9DG_LJRx7HlvRoViC3m7UWe8rYLJfA-ahRnOG03qTIYaFpnTHIJOM8SZxJc019PgMkP7Clatfcu5eOpRP46Li25OZCmSpytE72bSDAXNY9AgBIO5kr2X_R3nH1XxjE9Pn1bQ9-7HCumqg0w-P7O-Ji3FZoCzcjfAGyUu7TubDVP_YCvGpsQ-5SjNs_eL4QTwsAcHE-Sm2E6qi9LHmjMm_9JMUaaF-TyA3hdv",
  mandumeStatue: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgm9L-csOBljFyW2J1tuG8BDKym6_u_cMChCOcd4Im4t0EbFcZA6um0mWWGOHOKduN-nbgywmqvGuFD0dvbw7XR3QDX309JWzSmhe-bpRpZ_5I9tT2wetucK8XC2C2UM3kibthUjf64cuqptB_95DblWN38CR5TApikonDCOP4xVI3I-okuHZMpX00tTSXiyFFAh5D8sbD-esnFDM07wK6OhXt9UkDK-vwfL8k55EFHQjOSBFUu0E8oIgdrhWhuDmw2XkcF05OMlCc",
  beadworkPatterns: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCFOso6M85M8_f4CiILSzptFPOz1H5mLMiK9Lt9nF-Z7W2fg7AtcufAI_wXhTr0eShCfxaEpDBpMfhtKjdrsu7Z87roD-lKjcQOoigUHPKaoqeWh4f315jG48ZHWFip6JQ-OYU3tKdYGiFFeGFiW_lWLmC2Ef8Rx8wMbdbe2nP6kXXUD5o5tT0_A2abbdP67JkEyeCM2DZEhnN1uGCgh9uR364rfCOIcSQ-chbd53b6vpTUYeZQ4WcWSn7NelGebrPqUqfLTdBYD9T",
  aridLandscape: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiVle_Pa3v2MzpgB6i-4M-1KTuT2Ndq_fxaRzAfrdzJuQ68NMm1fPBoiJaEVBC8CRCs2FZLkdFJmBevZpiLLNwdir-PrzaMEDEQ-m4kOdzSb-n2yl6e12i_uBy0bnNZ0FHcphwvITcUjqb0CqVB-edfzAPRuY_l7NbFM57mAY2GlDG-bcIQJEun20uJFwwe4W7rwdPY3nLJuyPeqWXa0-t3zLjccecS0AXr_fOo6nqhFatbDMvCE6eMo9ymzj1mwAAP3SVA1tWHbPM",
  wiseElder: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0T55Ik888k_cw3ZmdNF2eVGWXQP1ukgUe0a9yMWGUItCSytw3VWgK4vDtU0FdymlDWy1wxSr8z3EXaOVtBnJTSCH4N-CP6SR_KR4abvu0Z3RQLyly6gK7Ly8n6QscJLK7bYK8CvUs6bFT1VPOZUMO8sWgY4FrpCOG3bstHCbneRaTiJMRsHXI39EciVyla-4xouhNM2aHpo4FSzPyPS3WYh_8oeUqLmXxKX0PlF0k_AHYFmEirO-rZJ1Q7EalAtm-q365tYJboXvI",
  historicalMap: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuCiALCPKIjcmvCGsiqMPaCgAzelB7KZuus2gvjDtRysEhnyxvsJBhvU-Ndcnom4ajV24v5qQGoEXy2AgrBnhWzZ1D5gFcGLokJaUQXJafuRJE549c7YaEEdq5Em8ZLYS-fn9cGtjVvOWMcsygR1nZQQrvzXUuZtVo18jAhZlBF-NYMmwZi9xxpvf0Ag80YWcWNRRYbilOJ0WFjwX5y_7Q7FaJ2CuoysWZ-orepNTUAppG8P9UaagC9dYWOJkWdlYtScdXDPKzCzgu",
  reliefMap: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAkcYO8zjjFRTZD3wwrfajOHabr6sR9qA-Z1ikm-9sGecyTXJK8EvefT9RWIBbY1AQt2oy-GwkpLNI9dqOhLuZerjC_uZq0W89R1G72G46KcMUZbc35cH_xmJns4iaCzIDNCkLqA3_xghehPwZB-k0wvSnkc5LCgs-RzxIjCFEwRPb00AgJxzPFRLZ--wmi2Hco7eOkpgLS3LzNsb9ZNHxxPLY870HeOFsksuWSeBGuopdItrjiB8UytGaUFD1Mk-NACCRGoZ9eBYt",
  potteryArtifact: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrjGo2haDnQtwP_UMRGSQF4nMAhS1lTQl5u92RG_VOHSixaCE3iwAo_Ba7B6K08wavWPosOJur2KfevWcejzOQRtc3nfL-l5Oy9MGgYhgsAP56qq_ABCAuj7oMbH2q2gTfMNY6pG3O1Kb4-7T2cGDDRd7HikRDdsl0KIJx_rBz_qZLZHKZtCv17qaBNg0JbJ4eddXIU-GyzWDTGrR-i3b1ymuSSUkkt-jIbJKA8VCpMhcNUE9dYLuWTyNmd2ONu_YBdR2sqkymLtUr",
  mandumeDigitalArt: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHBqpPLP2b_hsE6_yz03z6JkEhGbccnok3lZ29sIuQRjbp3VTcs5dabj5VwQUPFI1UJvtioG2NKd2eELSm9sOTWxhv8JnxAgzPpEHWf5LVN2wQnIPYUUYinoj33FaZzmfL_E6h4RZIJXeq6cGBc14dPFVY7AAPFi1ONh8lsdLHARm0im5NSqUZuBc_xHiafNZ_IPnlKxHr7UwCqq2gO9ddyu_bx1fUvkSCphGN1kA9-6MPceHy2vvXBYqBwi9AsUEBPFaibG43yGnU",
  sacredSigil: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgPkv9edQBPECZQAOXyyVaoFU5CR17aVoLQsHxeXSznf0tcFM5KF0VkKiHTVEw4fgdsVJxOD6B80rzVt-6A-vq6VkyQOAxS8m-W7Q04SFHLt8E5CG_tUmviJD6gVve9TCvDfm4GXIzXULPdUwjbKk8e3ZSmzNbxskXpUGpT4a8eAzgdsc-ebgSTjAwjTCJm5n1edL3L3dNL78IdcghrMULZVbUSrlNvblOoXaJ4XQkorxcaaeSugDeAxR0v9glao2NSfd_7R0GB-0D",
  eengobeCrown: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEA-uEXn4ksDUE32VSgXl-GJCYtTQNMnm1owdGITnSH3_xKUp_ZDbB9YohJhI-bBbl9DI3gcWYoGneLkuXbpAjQ6Z66JctfP2XSjlEGGrZfFk3PBLBAI1VssIHt9G93B1YeFFZtwJcPl4V8zx96JmVAJNnbL13s7nZ2ngLnElf5OF5kvilXimGNHpr2txI2bL-weCM7CRdkcdNIBG9k8v0vMcxvjTja6A56xFlI8LSt_CVYvUYWDR6w9Spwpp00REan1dvn2Anu2Ao",
  spiritDance: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1RAYxx0IqCyZscYjAHUor4wHS3kOe11HSahTfgeooe67HKwO9n1U7QP2XkPhzWc_ev2cR3e2lwL2TiiHUqx54snLpSBsMfAyakbTcrH4hoiALciPaPGXusKXdCyuv-jkvv7gea7rYyKGNVoVT7aU-K85cNYXOmVvun4qjpwpmfIxnjw12FKOmEAS_MBGY2Non3201dgfG4CRPyh5D8n_lMUyIdxo08crNJx_pzgCYooBXujj_FloFISQl0KbpAXH2Mg32izE68QBq",
  vesselFlux: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqfzFP9oadHJJSkkcEbqbM8FPLQzwrUFPQboPGuHAk1d6J8-RLHmStX5OpS6roCYCCaNho6ZpczMMZv6XzX63VS3gUzZGQ03c_0I5QSPO2J64V0FdbUbnWeqlQlQwN0LCr1dSaRh-VEy9_Dc-LWx55CEyUqoTjfT1NQtO4jaFQDPdKbMZJEA8VJlPB6sPrnaPT_ruwhyzmcdCHIl-S5uI-N0JK3d2BBs4__CRICOjn2pErGE2f0LA9CdGQxmK3iVmEnHHV3usMiyjK",
};

export const ARCHIVE_STATS: ArchiveStat[] = [
  { label: 'Total Essays', value: '1,248' },
  { label: 'Active Debates', value: '42' },
  { label: 'Contributors', value: '156' },
];

export const LATEST_ANALYSIS: AnalysisEntry[] = [
  {
    id: '1',
    category: 'Historiography',
    title: 'Oral Traditions: The Silent Guardians of Identity',
    excerpt: 'Exploring how oral narratives maintained cultural continuity during eras of forced migration.',
    author: 'DR. ELARA VANCE',
    readTime: '12 MIN READ',
    imageUrl: IMAGES.journalHands,
    type: 'tertiary'
  },
  {
    id: '2',
    category: 'Socio-Economics',
    title: 'Cattle as Currency: Re-evaluating Tribal Markets',
    excerpt: 'A mathematical approach to understanding wealth distribution in traditional pastoralist societies.',
    author: 'MARKUS NDUME',
    readTime: '18 MIN READ',
    imageUrl: IMAGES.dataNetwork,
    type: 'primary'
  },
  {
    id: '3',
    category: 'Symbolism',
    title: 'The Geometry of Courage: Decoding Shield Patterns',
    excerpt: 'Visual semiotics of defense equipment and its psychological impact on regional warfare.',
    author: 'SARAH KAU',
    readTime: '9 MIN READ',
    imageUrl: IMAGES.museumSpace,
    type: 'secondary'
  }
];

export const DEBATE_THREADS: DebateEntry[] = [
  {
    id: '1',
    tag: 'Hot Topic',
    time: 'Posted 3 hours ago',
    title: 'Digital vs. Physical Archives: How to preserve oral lineage?',
    participants: 156,
    replies: 84,
    color: 'secondary'
  },
  {
    id: '2',
    tag: 'New Debate',
    time: 'Posted 1 day ago',
    title: 'The ethics of modernizing heritage sites for luxury tourism.',
    participants: 24,
    replies: 12,
    color: 'accent-gold'
  },
  {
    id: '3',
    tag: 'Research Round',
    time: 'Posted 3 days ago',
    title: 'Re-mapping 19th Century trade routes via botanical fossils.',
    participants: 38,
    replies: 45,
    color: 'tertiary'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1894',
    title: 'Birth of Mandume',
    description: 'Born into the royal lineage of the Cuanhama people in southern Angola.',
    type: 'cultural'
  },
  {
    year: '1911',
    title: 'Ascension to the Throne',
    description: 'Became the 21st King of the Cuanhama at a time of increasing colonial pressure.',
    type: 'political'
  },
  {
    year: '1915',
    title: 'Battle of Môngua',
    description: 'Significant resistance against Portuguese expansionism in Southern Angola.',
    type: 'military'
  },
  {
    year: '1917',
    title: 'The Last Stand at Oihole',
    description: 'Final battle against combined colonial forces; Mandume chose death over surrender.',
    type: 'military'
  },
  {
    year: '2002',
    title: 'National Hero Status',
    description: 'Officially recognized as a national hero in both Angola and Namibia.',
    type: 'cultural'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Royal Ancestry',
    author: 'Kwami_Arts',
    imageUrl: IMAGES.mandumeDigitalArt,
    likes: '2.4k',
    comments: '128',
    tags: ['Illustration']
  },
  {
    id: '2',
    title: 'Sacred Sigil',
    author: 'Heritage Archive',
    imageUrl: IMAGES.sacredSigil,
    likes: '1.8k',
    comments: '45',
    tags: ['Artifact']
  },
  {
    id: '3',
    title: 'Eengobe Crown',
    author: 'Studio_O',
    imageUrl: IMAGES.eengobeCrown,
    likes: '892',
    comments: '12',
    tags: ['Artifact']
  },
  {
    id: '4',
    title: 'Spirit Dance',
    author: 'Amara.V',
    imageUrl: IMAGES.spiritDance,
    likes: '3.1k',
    comments: '340',
    tags: ['Illustration']
  },
  {
    id: '5',
    title: 'Vessel Flux',
    author: 'Digital_Minds',
    imageUrl: IMAGES.vesselFlux,
    likes: '564',
    comments: '29',
    tags: ['Digital']
  }
];
