'use client';

import deleteData from '@/utils/fetch/deleteData';
import Table from './Table';
import toast from 'react-hot-toast';
import { Option } from './Actions';
import { revalidatePath, revalidateTag } from 'next/cache';
import reload from '../../../../../utils/fetch/reload';

export default function DataTable({ data }: any) {
  const structure = [
    {
      accessorKey: 'title',
      header: 'Question',
    },
    {
      accessorKey: 'description',
      header: 'Answer',
    },
  ];

  const options: Option[] = [
    {
      name: 'Edit',
      action: () => {},
    },
    {
      name: 'Delete',
      action: async (id: string) => {
        const deleted = await deleteData('faq', id);

        if (deleted.status) {
          toast.success(deleted.message);
          reload('faq');
          return;
        }

        toast.error(deleted.message);
      },
    },
  ];

  return <Table data={data} structure={structure} options={options} />;
}
