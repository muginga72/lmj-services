// src/components/Pagination.js
import React from 'react';

const PaginationServices = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '0.5rem' }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: page === currentPage ? '#007bff' : '#f0f0f0',
            color: page === currentPage ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationServices;