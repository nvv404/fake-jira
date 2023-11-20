import Breakpoint from "./Breakpoint"

const lower = (bp: Breakpoint): string => `(max-width: ${bp - 1}px)`
const greater = (bp: Breakpoint): string => `(min-width: ${bp}px)`
const rules = {
  lowerSx: lower(Breakpoint.Sx),
  lowerXs: lower(Breakpoint.Xs),
  lowerSm: lower(Breakpoint.Sm),
  lowerMd: lower(Breakpoint.Md),
  lowerLg: lower(Breakpoint.Lg),
  lowerXl: lower(Breakpoint.Xl),
  greaterSx: greater(Breakpoint.Sx),
  greaterXs: greater(Breakpoint.Xs),
  greaterSm: greater(Breakpoint.Sm),
  greaterMd: greater(Breakpoint.Md),
  greaterLg: greater(Breakpoint.Lg),
  greaterXl: greater(Breakpoint.Xl),
}

type RuleT = keyof typeof rules

export const mq = (Object.keys(rules) as RuleT[]).reduce(
  (acc, bp) => ({
    ...acc,
    [bp]: `@media ${rules[bp]}`,
  }),
  {} as Record<RuleT, string>,
)
