import { StoreItem } from "../data/Storeitems";


export function StoreItemList({storeItemsCopy, storeItem ,getItemImagePath,increaseQuantity,}: any) {
    return (
      <li>
        <div className="store--item-icon">
          <img src={getItemImagePath(storeItem)} alt="beetroot" />
        </div>
        <button
          onClick={() => {
            increaseQuantity(storeItem);
          }}
        >
          Add to cart({storeItem.stock})
        </button>
      </li>
    );
  }