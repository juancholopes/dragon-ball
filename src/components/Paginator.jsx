import fetchCharacters from "../api.js";
import { useEffect, useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationDemo() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			try {
				const result = await fetchCharacters(); // Tu función existente
				setData(result);
			} catch (error) {
				console.error("Error:", error);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	const navigateToUrl = async (url) => {
		if (!url) return;

		setLoading(true);
		try {
			const response = await fetch(url);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={(e) => {
							e.preventDefault();
							navigateToUrl(data?.links?.previous);
						}}
						className={
							!data?.links?.previous ? "pointer-events-none opacity-50" : ""
						}
					/>
				</PaginationItem>
				{/* ... más botones ... */}
				<PaginationItem>
					<PaginationNext
						href="#"
						onClick={(e) => {
							e.preventDefault();
							navigateToUrl(data?.links?.next);
						}}
						className={
							!data?.links?.next ? "pointer-events-none opacity-50" : ""
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

export default PaginationDemo;
