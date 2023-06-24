import {ProductList} from "../components/ProductList.jsx";
import {Pagination} from "../components/Pagination.jsx";
import {LoadingSpinner} from "../components/LoadingSpinner.jsx";
import {useQuery} from "@tanstack/react-query";
import {getProductList} from "../services/api.js";
import {useState} from "react";

export const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const {data} = useQuery({
		queryKey: ["products", currentPage],
		queryFn: getProductList(currentPage),
	});

	// eslint-disable-next-line no-unused-vars
	const products = [
		{
			id: 1,
			title : "test the",
			body: "da badi",
		},
		{
			id: 2,
			title : "test the 1",
			body: "da badi",
		},
		{
			id: 3,
			title : "test the 2",
			body: "da badi",
		},

	];
	return (
		<>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl text-center my-5 font-bold underline">
					Products
				</h1>
				<ProductList products={products}/>
				<div className="flex items-center justify-between my-5">
					<Pagination/>
					<LoadingSpinner/>
				</div>
			</div>
		</>
	)
}