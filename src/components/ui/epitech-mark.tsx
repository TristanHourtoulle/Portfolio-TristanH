import Image from 'next/image';

/**
 * Epitech wordmark shown beside the parcours copy.
 */
export function EpitechMark() {
  return (
    <Image
      className="epitech-mark"
      src="/images/epitech-logo.png"
      alt="Logo Epitech"
      width={200}
      height={48}
      priority={false}
    />
  );
}
