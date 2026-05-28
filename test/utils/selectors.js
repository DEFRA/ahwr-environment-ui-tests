// Defra ID
export const DEFRA_ID_CRN_FIELD = '#crn'
export const DEFRA_ID_PASSWORD_FIELD = '#password'
export const DEFRA_ID_SIGN_IN_BUTTON = '#next'
export const DEFRA_ID_SIGN_IN_CHECKBOX = '//*[@id="5633290"]'
export const DEFRA_ID_CONTINUE_BUTTON = '#continueReplacement'

// Buttons
export const SUBMIT_BUTTON = 'button[type="submit"]'
export const AGREE_BUTTON = 'button[value="agree"]'
export const ACCEPTED_BUTTON = 'button[value="accepted"]'
export const START_CLAIM_BUTTON = '#start'
export const CONTINUE_BUTTON = 'button[id="continue"]'
export const SUBMIT_CLAIM_BUTTON = '#submit-claim'
export const ACCEPT_COOKIES_BUTTON = 'button[value="accept"]'
export const SIGNOUT_BUTTON = 'a[href="/sign-out"]'

// Checkboxes
export const T_AND_C_CHECKBOX = '#terms'

// Radios
export const BEEF_RADIO = 'input[value="beef"]'
export const REVIEW_RADIO = 'input[value="review"]'
export const YES_RADIO = 'input[value="yes"]'
export const SAMPLES_TAKEN_SAME_DAY_RADIO = '#whenTestingWasCarriedOut'
export const POSITIVE_TEST_RADIO = 'input[value="positive"]'
export const POULTRY_TYPE_DUCKS = 'input[name="typesOfPoultry"][value="ducks"]'
export const MINIMUM_NUMBER_OF_BIRDS_SELECTOR_YES =
  'input[name="minimumNumberOfBirds"][value="yes"]'
export const BIOSECURITY_YES = 'input[name="biosecurity"][value="yes"]'
export const BIOSECURITY_USEFULNESS_VERY_USEFUL =
  'input[name="biosecurityUsefulness"][value="very-useful"]'
export const CHANGES_IN_BIOSECURITY_CLEANING =
  'input[name="changesInBiosecurity"][value="cleaning"]'
export const COST_OF_CHANGES_NO_INTENTION =
  'input[name="costOfChanges"][value="no-intention"]'
export const INTERVIEW_YES = 'input[name="interview"][value="yes"]'

// Text fields
export const VISIT_DATE_DAY_FIELD = '#visit-date-day'
export const VISIT_DATE_MONTH_FIELD = '#visit-date-month'
export const VISIT_DATE_YEAR_FIELD = '#visit-date-year'
export const HERD_NAME_FIELD = '#herdName'
export const HERD_CPH_FIELD = '#herdCph'
export const NUMBER_OF_SAMPLES_FIELD = '#numberAnimalsTested'
export const VETS_NAME_FIELD = '#vetsName'
export const VET_RCVS_FIELD = '#vetRCVSNumber'
export const LAB_URN_FIELD = '#laboratoryURN'

export const getConfirmCheckDetailsSelector = (value) =>
  `input[name="confirmCheckDetails"][value="${value}"]`
