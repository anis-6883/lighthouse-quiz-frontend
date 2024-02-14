import React from 'react';
import DataTable from './DataTable';
import getData from '@/utils/fetch/getData';
import AddNewFAQ from './AddNewFAQ';

export default async function PageContent() {
  const data = await getData('faq');

  return (
    <>
      <AddNewFAQ />
      <DataTable data={data} />
    </>
  );
}
