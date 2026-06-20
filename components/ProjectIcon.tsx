import {
  BrainCircuit,
  Network,
  LayoutDashboard,
  ScanText,
  Activity,
  Smartphone,
  Boxes,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Network,
  LayoutDashboard,
  ScanText,
  Activity,
  Smartphone,
  Boxes,
  Wrench,
};

export default function ProjectIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name] ?? BrainCircuit;
  return <Icon size={size} className={className} />;
}
