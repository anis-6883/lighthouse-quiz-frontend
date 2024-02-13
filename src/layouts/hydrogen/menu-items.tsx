import { routes } from '@/config/routes';
import { BsStackOverflow } from 'react-icons/bs';
import { FaCogs } from 'react-icons/fa';
import { IoBarChart, IoCalendarOutline } from 'react-icons/io5';
import { LuLayoutDashboard, LuUserCog, LuUserX, LuUsers } from 'react-icons/lu';
import {
  PiBellRingingBold,
  PiChalkboardTeacherBold,
  PiConfettiBold,
  PiQuestionBold,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: <LuLayoutDashboard />,
  },
  {
    name: 'Questions Bank',
    href: routes.questionsBank.home,
    icon: <BsStackOverflow />,
  },
  {
    name: 'Daily Quizzes',
    href: routes.dailyQuizzes.home,
    icon: <IoCalendarOutline />,
  },
  {
    name: 'Live Quizzes',
    href: routes.liveQuizzes.home,
    icon: <PiChalkboardTeacherBold />,
  },
  {
    name: 'Reports',
    href: '#',
    icon: <IoBarChart />,
    dropdownItems: [
      {
        name: 'Daily Quizzes',
        href: routes.reports.dailyQuiz,
      },
      {
        name: 'Live Quizzes',
        href: routes.reports.liveQuiz,
      },
    ],
  },
  {
    name: 'FAQ',
    href: routes.faqs.home,
    icon: <PiQuestionBold />,
  },
  {
    name: 'Upcoming Features',
    href: routes.upcomingFeatures.home,
    icon: <PiConfettiBold />,
  },
  {
    name: 'Notifications',
    href: routes.notifications.home,
    icon: <PiBellRingingBold />,
  },
  {
    name: 'Manage Users',
    href: routes.manageUsers.home,
    icon: <LuUsers />,
  },
  {
    name: 'Manage Admins',
    href: routes.manageAdmins.home,
    icon: <LuUserCog />,
  },
  {
    name: 'Delete Accounts',
    href: routes.deleteAccounts,
    icon: <LuUserX />,
  },
  {
    name: 'General Settings',
    href: routes.generalSettings,
    icon: <FaCogs />,
  },
];
