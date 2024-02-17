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
        return <img src={row?.original?.image} alt='image' className='h-14 transition-all duration-500 hover:h-40' />;
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
          image: data.image,
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
          return AskConfirmation(t, () => deleteData('features', data._id));
        });
      }
    }
  ];

  return <Table data={data} structure={structure} options={options} />;
}
