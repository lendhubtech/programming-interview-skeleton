export default function StyleGuide() {
  const systemColors = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Off white', hex: '#FAFAFA' },
    { name: 'Almost white', hex: '#F0F0F2' },
    { name: 'Light grey', hex: '#DDDDDD' },
    { name: 'Mid grey', hex: '#AFAFAF' },
    { name: 'Stone', hex: '#666666' },
    { name: 'Dark grey', hex: '#2D2D2D' },
    { name: 'Almost black', hex: '#121212' },
    { name: 'Black', hex: '#000000' },
  ]

  const primaryColors = [
    { name: 'T3', hex: '#F7F3FF' },
    { name: 'T2', hex: '#E6DCFF' },
    { name: 'T1', hex: '#C1ACF9' },
    { name: 'Lendhub Purple', hex: '#813DFF' },
    { name: 'S1', hex: '#5B34C2' },
    { name: 'S2', hex: '#14062C' },
  ]

  const secondaryRed = [
    { name: 'T3', hex: '#FFF1F1' },
    { name: 'T2', hex: '#FFD0D0' },
    { name: 'T1', hex: '#FFAFAF' },
    { name: 'Lendhub Red', hex: '#FF6565' },
    { name: 'S1', hex: '#BA2424' },
    { name: 'S2', hex: '#3A0101' },
  ]

  const secondaryBlue = [
    { name: 'T3', hex: '#F4FAFF' },
    { name: 'T2', hex: '#E0F2FF' },
    { name: 'T1', hex: '#AFDCFF' },
    { name: 'Lendhub Blue', hex: '#1F98F7' },
    { name: 'S1', hex: '#2070AB' },
    { name: 'S2', hex: '#020C26' },
  ]

  const secondaryGreen = [
    { name: 'T3', hex: '#ECFFF9' },
    { name: 'T2', hex: '#C2F7E7' },
    { name: 'T1', hex: '#95E4CD' },
    { name: 'Lendhub Green', hex: '#23C999' },
    { name: 'S1', hex: '#0D8E69' },
    { name: 'S2', hex: '#022219' },
  ]

  const ColorSwatch = ({ name, hex }: { name: string; hex: string }) => (
    <div className="flex flex-col bg-white p-2 rounded">
      <div
        className="w-12 h-10 rounded shadow-sm border border-gray-200"
        style={{ backgroundColor: hex }}
      />
      <p className="mt-1 font-semibold text-xs">{name}</p>
      <p className="text-[10px] text-gray-600">{hex}</p>
    </div>
  )

  const ColorPalette = ({ title, colors }: { title: string; colors: Array<{ name: string; hex: string }> }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="py-4 px-4" style={{ backgroundColor: '#F3F3F3' }}>
      <h1 className="text-2xl font-bold mb-4">Brand colours</h1>

      <ColorPalette title="System palette" colors={systemColors} />
      <ColorPalette title="Primary palette" colors={primaryColors} />

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-3">Secondary palette</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {secondaryRed.map((color) => (
              <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {secondaryBlue.map((color) => (
              <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {secondaryGreen.map((color) => (
              <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
