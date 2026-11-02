import { PROFILE_PRIMARY_ACTION, PROFILE_SECONDARY_ACTION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import type { ButtonVariant } from '@/lib/types';

interface ProfileActionsProps {
  primaryVariant?: ButtonVariant;
  secondaryVariant?: ButtonVariant;
}

/**
 * Renders the CV and LinkedIn actions, the CV one only when a PDF is available.
 *
 * @param primaryVariant Style of the leading action.
 * @param secondaryVariant Style of the trailing action.
 * @returns The one or two action buttons.
 */
export function ProfileActions({
  primaryVariant = 'primary',
  secondaryVariant = 'ghost',
}: ProfileActionsProps) {
  return (
    <>
      <Button
        variant={primaryVariant}
        href={PROFILE_PRIMARY_ACTION.href}
        downloadFileName={PROFILE_PRIMARY_ACTION.downloadFileName}
      >
        {PROFILE_PRIMARY_ACTION.label}
      </Button>
      {PROFILE_SECONDARY_ACTION === null ? null : (
        <Button
          variant={secondaryVariant}
          href={PROFILE_SECONDARY_ACTION.href}
          downloadFileName={PROFILE_SECONDARY_ACTION.downloadFileName}
        >
          {PROFILE_SECONDARY_ACTION.label}
        </Button>
      )}
    </>
  );
}
