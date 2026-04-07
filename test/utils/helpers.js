import { $ } from '@wdio/globals'
import { CONTINUE_BUTTON } from './selectors'

export const clickOn = async (selector) => {
  await $(selector).click()
}

export const setText = async (field, text) => {
  await $(field).setValue(text)
}

export function getSelectFundingTypeSelector(value) {
  return `input[value="${value}"]`
}

export async function selectFundingType(fundingType) {
  await $(getSelectFundingTypeSelector(fundingType)).click()
  await $(CONTINUE_BUTTON).click()
}
