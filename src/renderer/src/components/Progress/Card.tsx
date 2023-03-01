const ProgressCard = ({ text, value, bgColor }) => {
  return (
    // shadow-xl
    <div className="card w-36 bg-base-100">
      <div className="card-body">
        <div className={`w-[33px] h-[35px] rounded-[10px] ${bgColor}`} />
        <h2 className="card-title">{text}</h2>
        <p>{value} tasks</p>
      </div>
    </div>
  )
}

export default ProgressCard
