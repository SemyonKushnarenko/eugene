import { Box } from "@mui/material";
import { FC } from "react";

interface IPagination {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: FC<IPagination> = ({ page, total, onChange }) => {
  const getPages = () => {
    if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
    if (page === 1) return [1, 2, '...', total];
    if (page <= 2) return [1, 2, 3, '...', total];
    if (page === total) return [1, '...', 6, 7]
    if (page >= total - 1) return [1, '...', total - 2, total - 1, total];
    return total === page + 2 ? [1, '...', page, '...', total] : [1, '...', page, page + 1, '...', total];
  };
  const pages = getPages();

  return (
    <Box sx={{ 
        display: 'flex', 
        gap: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'Gilroy',
        fontWeight: 600,
        fontSize: '17px',
        lineHeight: 1,
        letterSpacing: 0,
    }}>
      <Box
        sx={{ 
            width: 36, 
            height: 36, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: '#161413', 
            border: '1px solid #FFFFFF1F',
            borderRadius: '12px', 
            cursor: page === 1 ? 'not-allowed' : 'pointer', 
            opacity: page === 1 ? 0.4 : 1,
        }}
        onClick={() => page > 1 && onChange(page - 1)}
      >
        <img src="pagination/prev.svg" alt="prev" width={16} height={16} />
      </Box>
      {pages.map((p, i) =>
        p === '...'
          ? <Box key={i} sx={{ 
                width: 10, 
                height: 36, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
              <img src="pagination/more.svg" alt="more" width={13} height={12} />
            </Box>
          : <Box
              key={i}
              sx={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: p === page ? '#6C5DD3' : '#161413',
                color: '#fff',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: 20,
                cursor: p === page ? 'default' : 'pointer',
                transition: 'all 0.2s',
                border: '1px solid #FFFFFF1F',
              }}
              onClick={() => p !== page && typeof p === 'number' && onChange(p as number)}
            >
              {p}
            </Box>
      )}
      <Box
        sx={{ 
            width: 36, 
            height: 36, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: '#161413', 
            borderRadius: '12px', 
            cursor: page === total ? 'not-allowed' : 'pointer', 
            opacity: page === total ? 0.4 : 1,
            border: '1px solid #FFFFFF1F',
        }}
        onClick={() => page < total && onChange(page + 1)}
      >
        <img src="pagination/next.svg" alt="next" width={16} height={16} />
      </Box>
    </Box>
  );
};

export default Pagination;