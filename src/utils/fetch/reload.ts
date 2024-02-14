'use server';

import { revalidateTag } from 'next/cache';

export default async function reload(tag: string) {
  revalidateTag(tag);
}
