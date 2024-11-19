import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

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