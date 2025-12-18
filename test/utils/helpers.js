import { $ } from '@wdio/globals'

export const clickOn = async (selector) => {
  await $(selector).click()
}

export const setText = async (field, text) => {
  await $(field).setValue(text)
}
