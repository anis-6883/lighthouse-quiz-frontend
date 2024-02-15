'use client';

import deleteData from '@/utils/fetch/deleteData';
import toast from 'react-hot-toast';
import { Option } from '../../components/Actions';
import AskConfirmation from '../../components/AskConfirmation';
import Table from '../../components/Table';

let popup = false;

export default function FeatureTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const structure = [
    {
      header: 'Image',
      Cell: ({ row }: any) => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img src={row?.original?.image} />;
      }
    },
    {
      accessorKey: 'title',
      header: 'Title'
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
