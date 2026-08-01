import React from "react";
import {
  FiBookOpen,
  FiAward,
  FiActivity,
  FiTarget,
  FiHome,
  FiPieChart,
  FiUserCheck,
  FiUsers,
  FiBarChart2,
  FiCompass,
  FiStar,
  FiMonitor,
  FiCalendar,
  FiVideo,
  FiFileText,
  FiMapPin,
  FiTrendingUp,
  FiShield,
  FiBook,
  FiLayers,
} from "react-icons/fi";
import { FaGlobe, FaGraduationCap, FaMedal, FaTrophy } from "react-icons/fa";

type BrandIconProps = {
  name: string;
  className?: string;
};

export default function BrandIcon({ name, className = "h-6 w-6" }: BrandIconProps) {
  switch (name) {
    // Courses
    case "book":
    case "foundation":
    case "📘":
      return <FiBookOpen className={className} />;
    case "board":
    case "mastery":
    case "📗":
      return <FiAward className={className} />;
    case "science":
    case "pcm":
    case "🧪":
      return <FiActivity className={className} />;
    case "target":
    case "jee":
    case "entrance":
    case "🏆":
    case "🎯":
      return <FiTarget className={className} />;
    case "home":
    case "tuition":
    case "🏠":
      return <FiHome className={className} />;
    case "chart":
    case "commerce":
    case "📈":
      return <FiPieChart className={className} />;

    // Features & Why Choose Us
    case "faculty":
    case "👨‍🏫":
      return <FiUserCheck className={className} />;
    case "users":
    case "batch":
    case "👥":
      return <FiUsers className={className} />;
    case "test":
    case "analysis":
    case "📊":
      return <FiBarChart2 className={className} />;
    case "clarity":
    case "concept":
    case "💡":
      return <FiCompass className={className} />;
    case "star":
    case "review":
    case "⭐":
      return <FiStar className={className} />;

    // Online Coaching
    case "monitor":
    case "interactive":
    case "🖥️":
      return <FiMonitor className={className} />;
    case "calendar":
    case "schedule":
    case "📅":
      return <FiCalendar className={className} />;
    case "video":
    case "recording":
    case "📱":
      return <FiVideo className={className} />;
    case "file":
    case "material":
    case "📝":
      return <FiFileText className={className} />;
    case "globe":
    case "global":
    case "🌍":
      return <FaGlobe className={className} />;

    // Location / Badge
    case "pin":
    case "location":
    case "📍":
      return <FiMapPin className={className} />;
    case "trophy":
      return <FaTrophy className={className} />;
    case "medal":
      return <FaMedal className={className} />;
    case "graduation":
    case "🎓":
      return <FaGraduationCap className={className} />;

    // Rank Badges
    case "rank-1":
    case "🥇":
      return <FaTrophy className={`${className} text-amber-400`} />;
    case "rank-2":
    case "🥈":
      return <FaMedal className={`${className} text-slate-300`} />;
    case "rank-3":
    case "🥉":
      return <FaMedal className={`${className} text-amber-600`} />;

    default:
      return <FiBook className={className} />;
  }
}
