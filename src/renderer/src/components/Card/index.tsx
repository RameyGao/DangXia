import { FC } from 'react'

const Card: FC<Card.Props> = ({ bg, text, count }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-4 gap-4">
    //   {/* <div class="flex" borderRadius="12px" bg="#fff" px="16px" pt="18px" pb="12px"> */}
    //   <div className="" w="80px" h="100px">
    //     <div w="33px" h="35px" borderRadius="10px" bg={bg} />
    //     <Text fontSize="18px" color="#282828" pt="10px" pb="8px">
    //       {text}
    //     </Text>
    //     <Text fontSize="14px" color="#787878">
    //       {count} Tasks
    //     </Text>
    //   </div>
    // </div>
  )
}
export default Card
