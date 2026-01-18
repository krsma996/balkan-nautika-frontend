import { FooterGroup } from "./FooterModel";

type Props = FooterGroup;


export const FooterQuickLinks = ({label,items} : Props) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col space-y-2 max-w-xs">
      <h3 className="text-white font-semibold">{label}</h3>
      {items.map((item) => (
        <a href={item.href} className="text-white hover:underline">
          {item.label}
        </a>
      ))}
    </div>
  );
};