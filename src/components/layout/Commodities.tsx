import { Link } from "react-router-dom";
import { CommoditiesWrapper } from "../../styles/Commodities.styles";
import Button from "@mui/material/Button/index"
import { LinearProgress } from "@mui/material";
import { Item } from "../../App";
// import itemImg from '../../images/cart.jpg'

interface Props {
  data: Item[] | null,
  loading: boolean;
  handleAddToCart: (CartItem: Item) => void;
}

const Commodities: React.FC<Props> = ({ data, loading, handleAddToCart }) => {
  return (
    <>
        {loading ? (
          <LinearProgress />
        ) : (
          <CommoditiesWrapper>
            {data?.map((item: Item) => (
              <div key={item.id} className="item">
                <div className="item-wrapper">
                  <div className="item-img">
                  <img src={item.image} alt="Not found" />
                  </div>
                  <div className="content">
                  <Link to={`commodity/${item.id}`}>
                    <p>{item.title}</p>
                  </Link>
                    <div className="price">
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <Button onClick={(()=> handleAddToCart(item))}>Add to Cart</Button>
                </div>
              </div>
          ))}
          </CommoditiesWrapper>
        )}
    </>
  );
};

export default Commodities;
