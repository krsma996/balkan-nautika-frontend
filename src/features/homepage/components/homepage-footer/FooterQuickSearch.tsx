import { FooterGroup } from "./FooterModel";

export type Props = FooterGroup;

export const FooterQuickSearch = ({label,items} : Props) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="flex flex-col space-y-3">
        <h3 className="text-white font-semibold">{label}</h3>
        {items.map((key) => (
          <a href={key.href} className="text-white hover:underline">
            {key.label}
          </a>
        ))}
      </div>
    );
};