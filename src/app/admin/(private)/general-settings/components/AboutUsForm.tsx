import dynamic from 'next/dynamic';
import FormBlockWrapper from '../../components/FormBlockWrapper';
import QuillLoader from '../../components/QuillLoader';

const QuillEditor = dynamic(() => import('../../components/QuillEditor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function AboutUsForm({
  values,
  setFieldValue,
}: {
  setFieldValue: any;
  values: any;
}) {
  const handleChange = (input: string) => {
    const removeHtmlTags = input.replace(/<[^>]*>/g, '');
    removeHtmlTags
      ? setFieldValue('aboutUs', input)
      : setFieldValue('aboutUs', '');
  };

  return (
    <FormBlockWrapper title="About Us">
      <div className="grid grid-cols-1 gap-y-2">
        <QuillEditor
          value={values.aboutUs}
          onChange={handleChange}
          label=""
          className="h-[250px]"
          // className="col-span-full [&_.ql-editor]:min-h-[100px]"
          labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
        />
      </div>
    </FormBlockWrapper>
  );
}
