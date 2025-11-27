import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";

interface Stepper {
  steps: ReactNode[];
  current: number;
}

export const Stepper = ({ steps, current }: Stepper) => {
  return (
    <div>
      {steps.map((step, i) => {
        return (
          <div className="flex justify-between">
            <div className="flex flex-col items-center justify-center lg:w-12 w-8">
              <div
                className="data-[status=first]:bg-transparent data-[status=active]:bg-petroleum-900 data-[status=inactive]:bg-petroleum-900/30 w-1 h-full"
                data-status={
                  i === 0 ? "first" : i <= current ? "active" : "inactive"
                }
              ></div>
              <div
                className="flex items-center justify-center lg:min-h-12 lg:size-12 min-h-8 size-8 rounded-full data-[status=first]:bg-transparent data-[status=active]:bg-petroleum-900 data-[status=inactive]:bg-transparent-900/30 data-[status=inactive]:border border-petroleum-900 data-[status=inactive]:text-petroleum-900 text-white text-2xl font-bold font-display"
                data-status={i <= current ? "active" : "inactive"}
              >
                {i < current ? <CheckIcon /> : i + 1}
              </div>
              <div
                className="data-[status=last]:bg-transparent data-[status=active]:bg-petroleum-900 data-[status=inactive]:bg-petroleum-900/30 w-1 h-full"
                data-status={i === steps.length - 1 ? "last" : i <= current ? "active" : "inactive"}
              ></div>
            </div>
            <div className="w-full p-4">{step}</div>
          </div>
        );
      })}
    </div>
  );
};
