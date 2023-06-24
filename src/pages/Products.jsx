import {ProductList} from "../components/ProductList.jsx";
import {LoadingSpinner} from "../components/LoadingSpinner.jsx";
import {useQuery} from "@tanstack/react-query";
import {getProductList} from "../services/api";

export const Products = () => {
	const {isLoading, isError, error,data} = useQuery({
		queryKey: ["products", 1],
		queryFn: () => getProductList(1),
		keepPreviousData: true,
	}
	);

	if (isLoading){
		return <>
			<div className="flex justify-center">
				<LoadingSpinner/>
			</div>
		</>
	}
	if (isError) return <div>{error.message}</div>;

	return (
		<>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl text-center my-5 font-bold underline">
					Products
				</h1>
				<ProductList products={data.products}/>

			</div>
		</>
	)
}