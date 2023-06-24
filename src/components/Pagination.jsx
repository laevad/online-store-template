// eslint-disable-next-line react/prop-types
export const Pagination = ({ currentPage, totalItem, onPageChange }) => {

	// handle prev
	const handlePrevPage = () => {
		if (currentPage === 1) return;
		onPageChange(currentPage - 1);
	}

	// handle next
	const handleNextPage = () => {
		if (currentPage === totalItem) return;
		onPageChange(currentPage + 1);
	}

	return (
		<>
			<div className="join">
				<button className="join-item btn"
						onClick={handlePrevPage}
				>«</button>
				<button className="join-item btn">Page 22</button>
				<button className="join-item btn"
						onClick={handleNextPage}
				>»</button>
			</div>
		</>
	)
}