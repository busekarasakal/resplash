import { PopupMenu } from '../PopupMenu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import SortIcon from '@mui/icons-material/Sort';
import { Stack } from '@mui/material';
import * as React from 'react';
import {
  COLOR_OPTIONS,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from '../../shared/constants';
import { Option } from '../../shared/types';

export function SearchMenuGroup({
  onOrientationChange,
  orientation,
  color,
  onColorChange,
  sort,
  onSortChange,
}: {
  orientation: Option['value'];
  onOrientationChange: (value: string) => void;
  color: Option['value'];
  onColorChange: (value: string) => void;
  sort: Option['value'];
  onSortChange: (value: string) => void;
}) {
  return (
    <Stack direction='row' gap={2}>
      <PopupMenu
        options={COLOR_OPTIONS}
        text={
          (COLOR_OPTIONS.find((o) => o.value === color) ?? COLOR_OPTIONS[0])
            ?.label
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
