import { twMerge } from "tailwind-merge";

interface Boxprops {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<Boxprops> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `bg-neutral-900
    reounded-lg
    h-fit
    w-full
    `,
        className //(with tailwind-merge-package?) enables us to add more classes to the box (without style conflicts?)
      )}
    >
      {children}
    </div>
  );
};
export default Box;
