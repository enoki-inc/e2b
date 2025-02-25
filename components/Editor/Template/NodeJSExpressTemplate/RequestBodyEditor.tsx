import clsx from 'clsx'
import TextareaAutosize from 'react-textarea-autosize'

import Text from 'components/Text'

export interface Props {
  onChange: (content: string) => void
  content: string
}

function RequestBodyEditor({
  onChange,
  content,
}: Props) {
  return (
    <div className="
      self-stretch
      flex
      flex-col
      items-start
      pb-6
      border-b
      border-slate-200
    ">
      <Text
        className="mb-2 font-semibold text-slate-400"
        size={Text.size.S2}
        text="Define the incoming request payload"
      />
      <div className="
        self-stretch
        rounded-t-lg
        font-mono
        select-none
        text-slate-300
        text-sm
      ">
        {'{'}
      </div>
      <TextareaAutosize
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        name="block"
        placeholder="email: string // Optionally add comments to explain what the field is for"
        value={content}
        onChange={e => onChange(e.target.value)}
        className={clsx(
          'w-full',
          'pl-6',
          'pr-3',
          'py-1',
          'tracking-wide',
          'font-mono',
          'text-slate-500',
          'focus:text-slate-600',
          'no-scroller',
          'outline-none',
          'text-sm',
          'placeholder:text-slate-300',
        )}
      />
      <div className="
        self-stretch
        rounded-b-lg
        font-mono
        select-none
        text-slate-300
        text-sm
      ">
        {'}'}
      </div>
    </div>
  )
}

export default RequestBodyEditor
