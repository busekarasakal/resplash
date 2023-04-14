import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';

export function SearchBar({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}) {
  const showEndAdornment = onClear && value.length > 0;

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color={'action'} />
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        onChange={onChange}
        placeholder='Search…'
        endAdornment={
          showEndAdornment ? (
            <InputAdornment
              position='end'
              onClick={onClear}
              sx={{ ':hover': { cursor: 'pointer' } }}
            >
              <CloseIcon color={'action'} fontSize={'small'} />
            </InputAdornment>
          ) : null
        }
      />
    </Search>
  );
}
