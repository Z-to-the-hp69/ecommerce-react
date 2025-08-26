// import { Close, Remove } from "@mui/icons-material";
// import { Button, Divider, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { CartItem } from "../../../types/cartTypes";
// import { useAppDispatch } from "../../../State/Store";
// import { updateCartItem } from "../../../State/customer/cartSice";

// const CartItemCard = ({ item }: { item: CartItem }) => {
//   const dispatch = useAppDispatch();
//   const handleUpdateQuantity = (value: number) => () => {
//     //handle
//     dispatch(
//       updateCartItem({
//         jwt: localStorage.getItem("jwt"),
//         cartItemId: item.id,
//         cartItem: { quantity: item.quantity + value },
//       })
//     );
//   };
//   return (
//     <div className="border rounded-md  relative">
//       <div className="p-5 flex gap-3">
//         <div>
//           <img
//             className="w-[90px] rounded-md"
//             // src="https://i.pinimg.com/736x/82/f7/71/82f771e196ca70d2d6b814613b5632ec.jpg    "
//             src={item.product.images[0]}
//             alt=""
//           />
//         </div>

//         <div className="space-y-2">
//           <h1 className="font-semibold text-lg">
//             {item.product.seller?.businessDetails.businessName}
//           </h1>
//           <p className="text-gray-600 font-medium text-sm">
//             {item.product.title}
//           </p>
//           <p className="text-gray-400 text-xs">
//             <strong>Sold by:</strong>
//             Natural Lifestyle product
//           </p>
//           <p className="text-sm">7 days replacement available</p>
//           <p className="text-sm text-gray-500">
//             <strong>quantity : </strong>
//             {item.quantity}
//           </p>
//         </div>
//       </div>
//       <Divider />

//       <div className="flex justify-between items-center">
//         <div className="px-5 py-2 flex justify-between items-center">
//           <div className="flex  items-center gap-2 w-[140px] justify-between">
//             <Button onClick={handleUpdateQuantity(-1)} disabled={true}>
//               <Remove />
//             </Button>
//             <span>{item.quantity}</span>
//             <Button onClick={handleUpdateQuantity(1)}>
//               <AddIcon />
//             </Button>
//           </div>
//         </div>

//         <div className="pr-5">
//           <p className="text-gray-700 font-medium">{item.sellingPrice}Ks</p>
//         </div>
//       </div>

//       <div className="absolute top-1 right-1">
//         <IconButton color="primary">
//           <Close />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default CartItemCard;

import { Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../State/Store";
import {
  updateCartItem,
  deleteCartItem,
} from "../../../State/customer/cartSice";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const jwt = localStorage.getItem("jwt") || "";

  const handleUpdateQuantity = (value: number) => {
    const newQuantity = item.quantity + value;
    if (newQuantity > 0) {
      dispatch(
        updateCartItem({
          jwt,
          cartItemId: item.id,
          cartItem: { quantity: newQuantity },
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(deleteCartItem({ jwt, cartItemId: item.id }));
  };

  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt={item.product.title}
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by:</strong> Natural Lifestyle product
          </p>
          <p className="text-sm">7 days replacement available</p>
        </div>
      </div>

      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex items-center gap-2 w-[160px] justify-between">
          <Button
            onClick={() => handleUpdateQuantity(-1)}
            disabled={item.quantity <= 1}
          >
            <Remove />
          </Button>
          <span>{item.quantity}</span>
          <Button onClick={() => handleUpdateQuantity(1)}>
            <AddIcon />
          </Button>
        </div>

        <div className="pr-5">
          <p className="text-gray-700 font-medium">{item.sellingPrice} Ks</p>
        </div>
      </div>

      <div className="absolute top-1 right-1">
        <IconButton color="primary" onClick={handleRemove}>
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;
