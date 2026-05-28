import { browser, expect, $ } from '@wdio/globals'
import * as SELECTORS from '../utils/selectors'
import {
  DEFRA_ID_CRN,
  DEFRA_ID_PASSWORD,
  PUBLIC_USER_UI_URL
} from '../utils/constants'
import { clickOn, setText, selectFundingType } from '../utils/helpers'

describe('Login and complete base user journey', async function () {
  it('can log into an account, create an agreement and create a claim for poultry', async () => {
    await browser.url(PUBLIC_USER_UI_URL)

    await setText(SELECTORS.DEFRA_ID_CRN_FIELD, DEFRA_ID_CRN)
    await setText(SELECTORS.DEFRA_ID_PASSWORD_FIELD, DEFRA_ID_PASSWORD)
    await clickOn(SELECTORS.DEFRA_ID_SIGN_IN_BUTTON)
    await clickOn(SELECTORS.DEFRA_ID_SIGN_IN_CHECKBOX)
    await clickOn(SELECTORS.DEFRA_ID_CONTINUE_BUTTON)

    // Waiting for DEFRA ID to redirect back to our service
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('/check-details'),
      {
        timeout: 10000,
        timeoutMsg: 'Expected to be redirected to /check-details'
      }
    )
    await clickOn(SELECTORS.ACCEPT_COOKIES_BUTTON)
    await clickOn(SELECTORS.getConfirmCheckDetailsSelector('yes'))
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await selectFundingType('POUL')

    // Into poultry apply journey
    await clickOn(SELECTORS.AGREE_BUTTON)
    await clickOn(SELECTORS.AGREE_BUTTON)
    await clickOn(SELECTORS.AGREE_BUTTON)
    await clickOn(SELECTORS.T_AND_C_CHECKBOX)
    await clickOn(SELECTORS.ACCEPTED_BUTTON)

    // Navigate to poultry dashboard page
    await browser.url(`${PUBLIC_USER_UI_URL}poultry/vet-visits`)

    // Into poultry claim journey
    await clickOn(SELECTORS.START_CLAIM_BUTTON)

    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()

    await setText(SELECTORS.VISIT_DATE_DAY_FIELD, day)
    await setText(SELECTORS.VISIT_DATE_MONTH_FIELD, month)
    await setText(SELECTORS.VISIT_DATE_YEAR_FIELD, year)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await setText(SELECTORS.HERD_NAME_FIELD, 'Site 1')
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    const randomCPH = Math.floor(100000000 + Math.random() * 900000000)
    await setText(SELECTORS.HERD_CPH_FIELD, randomCPH)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.YES_RADIO)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.POULTRY_TYPE_DUCKS)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.MINIMUM_NUMBER_OF_BIRDS_SELECTOR_YES)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await setText(SELECTORS.VETS_NAME_FIELD, 'Dr Nick')
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await setText(SELECTORS.VET_RCVS_FIELD, '1112223')
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.BIOSECURITY_YES)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.BIOSECURITY_USEFULNESS_VERY_USEFUL)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.CHANGES_IN_BIOSECURITY_CLEANING)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.COST_OF_CHANGES_NO_INTENTION)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.INTERVIEW_YES)
    await clickOn(SELECTORS.SUBMIT_BUTTON)

    await clickOn(SELECTORS.SUBMIT_BUTTON)

    const code = await $('#reference').getText()
    expect(code).toMatch(/^PORE-[A-Z0-9]{4}-[A-Z0-9]{4}$/)

    await clickOn(SELECTORS.SIGNOUT_BUTTON)
  })
})
