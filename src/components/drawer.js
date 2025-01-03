import { IoCloseOutline } from "react-icons/io5";

export default function Drawer({ children, title, setShowDrawer }) {
  return (
    <>
      <div className="fixed right-0 top-0 z-50 h-full w-full space-y-4 bg-white p-4 shadow-lg md:w-[35%] lg:w-[25%]">
        <div className="flex items-center justify-between">
          <h2 className="text-[clamp(1.25rem,5vw,1.5rem)] font-bold">
            {title}
          </h2>
          <button onClick={() => setShowDrawer(false)}>
            <IoCloseOutline size={40} />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
