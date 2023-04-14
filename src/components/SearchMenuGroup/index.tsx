import { PopupMenu } from '../PopupMenu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import SortIcon from '@mui/icons-material/Sort';
import { Stack } from '@mui/material';
import * as React from 'react';

type PopupMenuOption = {
  label: string;
  value: string;
};

const ORIENTATION_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Landscape', value: 'landscape' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Squarish', value: 'squarish' },
];

const COLOR_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Black & White', value: 'black_and_white' },
  { label: 'Black', value: 'black' },
  { label: 'White', value: 'white' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Orange', value: 'orange' },
  { label: 'Red', value: 'red' },
  { label: 'Purple', value: 'purple' },
  { label: 'Magenta', value: 'magenta' },
  { label: 'Green', value: 'green' },
  { label: 'Teal', value: 'teal' },
  { label: 'Blue', value: 'blue' },
];

const SORT_OPTIONS = [
  { label: 'Relevance', value: 'relevant' },
  { label: 'Latest', value: 'latest' },
];

export function SearchMenuGroup({
  onOrientationChange,
  orientation,
  color,
  onColorChange,
  sort,
  onSortChange,
}: {
  orientation: PopupMenuOption['value'];
  onOrientationChange: (value: string) => void;
  color: PopupMenuOption['value'];
  onColorChange: (value: string) => void;
  sort: PopupMenuOption['value'];
  onSortChange: (value: string) => void;
}) {
  return (
    <Stack direction='row' gap={2}>
      <PopupMenu
        options={COLOR_OPTIONS}
        text={
          (COLOR_OPTIONS.find((o) => o.value === color) ?? COLOR_OPTIONS[0])
            ?.label ?? 'Color'
        }
        icon={<ColorLensIcon />}
        value={color}
        onChange={onColorChange}
        isNewFeature
      />
      <PopupMenu
        options={ORIENTATION_OPTIONS}
        text={
          (
            ORIENTATION_OPTIONS.find((o) => o.value === orientation) ??
            ORIENTATION_OPTIONS[0]
          )?.label
        }
        icon={<AutoAwesomeMosaicIcon />}
        value={orientation}
        onChange={onOrientationChange}
      />
      <PopupMenu
        text={
          (SORT_OPTIONS.find((o) => o.value === sort) ?? SORT_OPTIONS[0])?.label
        }
        options={SORT_OPTIONS}
        icon={<SortIcon />}
        value={sort}
        onChange={onSortChange}
      />
    </Stack>
  );
}
