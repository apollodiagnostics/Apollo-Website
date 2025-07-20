import {
  BookWalkInSlotForm,
  BookWalkInSlotFormProps,
} from '@components/entities'

export type BookTestData = BookWalkInSlotFormProps
export function BookTest(props: BookTestData) {
  return <BookWalkInSlotForm {...props} />
}
