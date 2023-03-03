const DragLine = ({
  lineLength = 3,
  className
}: {
  lineLength?: number
  className: string
}): JSX.Element => {
  return (
    <div className={`w-8 h-2 flex flex-col justify-between ${className}`}>
      {Array.from({ length: lineLength })
        .fill(1)
        .map(
          (_: unknown, index: number): JSX.Element => (
            <div className="w-full h-px bg-gray-400" key={index} />
          )
        )}
    </div>
  )
}

export default DragLine
