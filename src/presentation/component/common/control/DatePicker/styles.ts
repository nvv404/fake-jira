import { styled } from "@mui/material"
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"
import type { ValueT } from "presentation/component/common/control/DatePicker"
import type { ThemeT } from "presentation/context/ThemeProvider/theme/types"

type PickerPropsT = {
  emotionTheme: ThemeT
  isDisabled?: boolean
}

export const StyledDatePicker = styled(MuiDatePicker<ValueT>)<PickerPropsT>`
  fieldset.MuiOutlinedInput-notchedOutline {
    /*
      we have to use here !important to override mui native style 
    */
    border-color: ${({ emotionTheme, isDisabled }) =>
      isDisabled
        ? emotionTheme.colors.disabledDark
        : emotionTheme.colors.primaryMain} !important;
    background-color: ${({ emotionTheme, isDisabled }) =>
      isDisabled ? emotionTheme.colors.disabledMain : "transparent"};
  }

  .MuiInputBase-input {
    &::placeholder {
      color: white;
      -webkit-text-fill-color: white;
    }
  }
`
