import { FooterGroup } from "../models/FooterModel.types";

export type Props = FooterGroup;

export const FooterQuickSearch = ({label,items} : Props) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="flex flex-col space-y-3">
        <h3 className="text-white font-semibold">{label}</h3>
        {items.map((item) => (
        <a
           key={item.id}
           href={item.href}
           className="text-white hover:underline">
            {item.label}
        </a>
        ))}
      </div>
    );
};