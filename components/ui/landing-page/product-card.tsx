import { motion } from "framer-motion";
import Image from "next/image";
import VR from "../../../public/vr.jpg";
import { cn } from "@/lib/utils";

export default function ProductCard({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className={cn(
        "w-36 h-36 bg-gradient-to-br from-green-400 to-purple-500 flex flex-col justify-center items-center  rounded-3xl ",
        className
      )}
    >
      <Image src={VR} alt="vr" className="size28 object-cover rounded-2xl" />
      <div className="text-sm font-medium">Camera $525</div>
    </motion.div>
  );
}