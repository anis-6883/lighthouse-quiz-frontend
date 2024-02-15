'use client';

import deleteData from '@/utils/fetch/deleteData';
import toast from 'react-hot-toast';
import { Option } from '@/app/super-admin/(private)/components/Actions';
import AskConfirmation from '@/app/super-admin/(private)/components/AskConfirmation';
import Table from '../../components/Table';

let popup = false;

export default function FAQTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const structure = [
    {
      accessorKey: 'title',
      header: 'Question'
    },
    {
      accessorKey: 'description',
      header: 'Answer'
    }
  ];

  const options: Option[] = [
    {
      name: 'Edit',
      action: (data: any) => {
        edit(true);
        formData({
          title: data.title,
          description: data.description,
          id: data._id
        });
      }
    },
    {
      name: 'Delete',
      action: async (data: any) => {
        if (popup === true) return;

        toast((t) => {
          popup = t.visible;
          return AskConfirmation(t, () => deleteData('faq', data._id));
        });
      }
    }
  ];

  return <Table data={data} structure={structure} options={options} />;
}
