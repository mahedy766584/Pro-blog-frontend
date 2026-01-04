// import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
// import ActiveLink from "./ActiveLink";
// import { navLinks } from "./navLinks";

// type TSidebarProps = {
//     isSidebarOpen: boolean;
//     isLoading?: boolean;
// };

// const Sidebar = ({ isSidebarOpen, isLoading = false }: TSidebarProps) => {
//     return (
//         <div
//             className={`
//                     h-full! bg-glass! backdrop-blur-xl!  lg:transition-all! lg:duration-500! lg:ease-in-out! hidden! lg:flex!
//                     ${isSidebarOpen ? "lg:w-60 opacity-100!" : "lg:-ml-40!"}
//                     overflow-hidden!
//                         `}
//         >
//             <nav className="flex! flex-col! gap-6! mt-6!">
//                 {isLoading
//                     ? Array.from({ length: 5 }).map((_, idx) => (
//                         <BlogCardSkeleton rows={0} marginBottom={5} width={200} avatar={false} key={idx} />
//                     ))
//                     : navLinks.map((link) => (
//                         <ActiveLink
//                             key={link.to}
//                             to={link.to}
//                             label={link.label}
//                             Icon={link.Icon}
//                         />
//                     ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;