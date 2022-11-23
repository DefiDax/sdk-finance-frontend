import CardNumber from '@/rules/regexp/CardNumber';
import RegExp from '@/rules/validation/RegExp';

export const CardNumberValidator = (
  required: boolean = false,
  trigger: string = 'blur',
  message: string = 'validation.invalid_card_number',
) => RegExp('validation.is_required', message, trigger, CardNumber, required);
