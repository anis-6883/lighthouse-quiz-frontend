import MCQanswer from './MCQanswer'

export default function MultipleChoiceQuestion() {
  return (
    <div className="flex gap-5">
      <MCQanswer rounded />
      <MCQanswer rounded />
      <MCQanswer rounded />
      <MCQanswer rounded />
    </div>
  )
}
