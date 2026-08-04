import {
  Award,
  BatteryCharging,
  Bot,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  LayoutGrid,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Users2,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons referenced by string keys in site.config.ts so content editors
 * never have to import React components. Add new keys here as needed.
 */
export const iconMap: Record<string, LucideIcon> = {
  Award,
  BatteryCharging,
  Bot,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  LayoutGrid,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Users2,
  Zap,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
