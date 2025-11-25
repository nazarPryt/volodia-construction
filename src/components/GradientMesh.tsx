interface GradientMeshProps {
  variant?: 'purple' | 'blue' | 'green' | 'orange'
  opacity?: number
}

export default function GradientMesh({ variant = 'purple', opacity = 0.3 }: GradientMeshProps) {
  const gradients = {
    purple: {
      gradient1: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.4))',
      gradient2: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(96, 165, 250, 0.5))',
      gradient3: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(139, 92, 246, 0.4))',
    },
    blue: {
      gradient1: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.4))',
      gradient2: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(20, 184, 166, 0.5))',
      gradient3: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(59, 130, 246, 0.4))',
    },
    green: {
      gradient1: 'linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(34, 197, 94, 0.4))',
      gradient2: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(132, 204, 22, 0.5))',
      gradient3: 'linear-gradient(135deg, rgba(132, 204, 22, 0.3), rgba(16, 185, 129, 0.4))',
    },
    orange: {
      gradient1: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(245, 158, 11, 0.4))',
      gradient2: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(234, 179, 8, 0.5))',
      gradient3: 'linear-gradient(135deg, rgba(234, 179, 8, 0.3), rgba(251, 146, 60, 0.4))',
    },
  }

  const selectedGradients = gradients[variant]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top gradient orbs */}
      <div
        className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: selectedGradients.gradient1,
          opacity,
        }}
      />
      <div
        className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: selectedGradients.gradient2,
          opacity,
        }}
      />

      {/* Middle gradient orbs */}
      <div
        className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          background: selectedGradients.gradient3,
          opacity: opacity * 0.6,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Bottom gradient orbs */}
      <div
        className="absolute -bottom-24 left-10 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: selectedGradients.gradient3,
          opacity,
        }}
      />
      <div
        className="absolute -right-24 -bottom-24 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: selectedGradients.gradient1,
          opacity: opacity * 0.9,
        }}
      />
    </div>
  )
}

GradientMesh.displayName = 'GradientMesh'
