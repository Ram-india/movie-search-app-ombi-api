import React from 'react'

const Pagination = ({currentPage, totalResults, onPageChange}) => {
  {currentPage, totalResults, onPageChange}
  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 results per page
  if( totalPages <= 1) {
    return null; // No pagination needed if there's only one page
  }
  
  return (
    <div className='flex justify-center gap-4 mt-6'>
      <button
      onClick={()=> onPageChange (currentPage - 1)}
      disabled ={currentPage === 1}
      className='px-4 py-2 bg-gray-300 rounded disabled:opacity-50' >

      Prev
      </button>
      <span className='px-4 py-2 font-semibold'>Page {currentPage} of {totalPages}</span>
      <button
      onClick={()=> onPageChange(currentPage + 1 )}
      disabled = {currentPage === totalPages}
      className='px-4 py-2 bg-gray-300 rounded disabled:opacity-50'>
        Next
      </button>
    </div>
  )
}

export default Pagination