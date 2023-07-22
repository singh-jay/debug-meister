import React, { useDeferredValue, useMemo, useState } from "react";
import { useNetworkContext } from "../context/NetworkContext";
import carrotIcon from "../icons/svg/carrot.svg";
import trashIcon from "../icons/svg/trash.svg";
import ObjectViewer from "./ObjectViewer";

export const Network = () => {
	const { networkRequests, clearNetworkRequests } = useNetworkContext();

	const [openSection, setOpenSection] = useState(false);
	const [filter, setFilter] = useState("");
	const deferredFilterValue = useDeferredValue(filter);

	const handleFilterChange = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setFilter(e.target.value);
	};

	const filteredNetworkRequests = useMemo(() => {
		return networkRequests.filter(({ request }) => request.url.includes(deferredFilterValue.toLowerCase()));
	}, [deferredFilterValue, networkRequests]);

	return (
		<details
			className="group"
			open={openSection}
			onToggle={(e) => {
				setOpenSection(e.target.open);
			}}
		>
			<summary className="flex cursor-pointer list-none items-center justify-between font-medium">
				<h1 className="text-lg font-medium">Network</h1>
				<div className="flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between">
					{openSection && filteredNetworkRequests.length > 0 && (
						<>
							<input
								type="text"
								placeholder="Filter requests..."
								value={filter}
								onChange={handleFilterChange}
								className="appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
							/>
							<div
								className="p-1.5 mt-1.5 hover:bg-slate-200 rounded-md"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									clearNetworkRequests();
									setOpenSection(false);
								}}
							>
								<img src={trashIcon} width={24} height={24} alt="clear console" />
							</div>
						</>
					)}
				</div>
				<span className="transition group-open:rotate-180">
					<img src={carrotIcon} width={24} height={24} alt="open icon" />
				</span>
			</summary>
			<div className="group-open:animate-fadeIn mt-3 text-neutral-600 -mx-4">
				{filteredNetworkRequests.map((request, index) => (
					<div key={index} className={`px-4 py-2 ${index % 2 === 0 ? "bg-slate-100" : ""}`}>
						<ObjectViewer data={request} />
					</div>
				))}
			</div>
		</details>
	);
};
