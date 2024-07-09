import { PawPrint } from "lucide-react";
import Link from "next/link";

const Logo = () => {
	return (
		<Link className="flex items-center gap-2" href={"/"}>
			<PawPrint className="stroke h-11 w-11 stroke-zinc-800 dark:stroke-white stroke-[2]" />{" "}
		</Link>
	);
};

export default Logo;
