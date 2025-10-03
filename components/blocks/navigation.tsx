import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Filters from "./filters";

type NavigationItem = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

const navigationItems: NavigationItem[] = [
  {
    icon: <Search className="w-4 h-4 text-gray-400" />,
    title: "Comece sua busca",
  },
];

export default function Navigation() {
  return (
    <>
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative flex justify-center my-8 mx-0 max-w-screen sm:max-w-96"
        >
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {item.icon}
          </span>
          <Input
            type="text"
            placeholder={item.title}
            className="pl-10"
          />
        </div>
      ))}
    </>
  );
}
