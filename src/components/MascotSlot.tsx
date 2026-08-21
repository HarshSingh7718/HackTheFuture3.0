type Props = { label: string; className?: string }

/** Replace this component with each approved mascot pose when assets arrive. */
export function MascotSlot({ label, className = '' }: Props) {
  return <div className={`mascot-slot ${className}`} aria-label={`${label} mascot placeholder`}>
    <span>MAS COT</span><small>{label}</small><i>Replace with approved pose</i>
  </div>
}
