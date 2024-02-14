import { useMemo } from 'react';
import Action, { Option } from './Actions';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';

type props = {
  data: any;
  structure: MRT_ColumnDef[];
  options: Option[];
};

export default function Table({ data, structure, options }: props) {
  structure = [
    ...structure,
    {
      header: 'Actions',
      Cell: ({ row }) => Action(row.original, options),
    },
  ];

  const columns = useMemo<MRT_ColumnDef[]>(() => structure, [structure]);
  const table = useMantineReactTable({ columns, data });
  return <MantineReactTable table={table} />;
}
