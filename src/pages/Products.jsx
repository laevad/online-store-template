import {ProductList} from "../components/ProductList.jsx";
import {Pagination} from "../components/Pagination.jsx";
import {LoadingSpinner} from "../components/LoadingSpinner.jsx";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {getProductList} from "../services/api";

export const Products = () => {
	const [currentPage] = useState(1);
	const {isLoading, isError, error,data} = useQuery({
		queryKey: ["products", currentPage],
		queryFn: () => getProductList(currentPage),
	}
	);

	if (isLoading) return <LoadingSpinner/>;
	if (isError) return <div>{error.message}</div>;

	return (
		<>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl text-center my-5 font-bold underline">
					Products
				</h1>
				<ProductList products={data.products}/>
				<div className="flex items-center justify-between my-5">
					<Pagination/>
					<LoadingSpinner/>
				</div>
			</div>
		</>
	)
}