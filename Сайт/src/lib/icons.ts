import {
  Award,
  BatteryCharging,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Users2,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons referenced by string keys in site.config.ts so content editors
 * never have to import React components. Add new keys here as needed.
 */
export const iconMap: Record<string, LucideIcon> = {
  Award,
  BatteryCharging,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Users2,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
