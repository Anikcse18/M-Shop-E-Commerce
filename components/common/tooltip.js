import dynamic from "next/dynamic";

const Tooltip = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.Tooltip),
  { ssr: false }
);
const TooltipContent = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipContent),
  { ssr: false }
);
const TooltipProvider = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipProvider),
  { ssr: false }
);
const TooltipTrigger = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipTrigger),
  { ssr: false }
);

const MyTooltip = ({ title, content }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{title}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MyTooltip;
