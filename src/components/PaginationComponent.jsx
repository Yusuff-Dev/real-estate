import React from 'react'

function PaginationComponent({
    totalPages,
    currentPage,
    onPageChange,
    pageSize,
    setPageSize,
}) {
    const getPageNumbers = () => {
        const pages = [];
        const visiblePages = 4; // Number of visible page buttons

        // Add first few pages
        for (let i = 1; i <= visiblePages; i++) {
            pages.push(i);
        }

        // Add ellipsis and the last page if there are more than visiblePages pages
        if (totalPages > visiblePages) {
            pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };
    return (
        <div className="flex items-center justify-between">
            {/* Page size selector */}
            <div className="items-center gap-5 flex-wrap hidden sm:flex flex-col md:flex-row">
                <label className="body-18 text-black-60">Показывать на странице:</label>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="border border-stroke w-full md:w-[70px] h-10 grow"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 flex-wrap">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-5 py-3 disabled:opacity-50"
                >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>

                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => page !== "..." && onPageChange(page)}
                        className={`w-10 h-10 sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] border border-stroke ${currentPage === page ? "bg-beigie-100 text-white" : ""
                            }`}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-5 py-3 disabled:opacity-50"
                >
                    <svg className='rotate-180' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default PaginationComponent