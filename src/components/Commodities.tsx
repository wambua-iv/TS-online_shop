import { Link } from "react-router-dom";
import { CommoditiesWrapper } from "../styles/Commodities.styles";
import Button from "@mui/material/Button/index"
import { LinearProgress } from "@mui/material";
import { item } from "../App";

interface Props {
  data: any;
  loading: boolean;
  handleAddToCart: (CartItem: item) => void;
}

const Commodities: React.FC<Props> = ({ data, loading, handleAddToCart }) => {
  return (
    <>
        {loading ? (
          <LinearProgress />
        ) : (
          <CommoditiesWrapper>
            {data.map((item: item) => (
            <Link to={item.id}>
              <div key={item.id} className="item">
                <div className="item-wrapper">
                  <img src={item.image} alt="Not found" />
                  <div className="content">
                    <p>{item.title}</p>
                    <div className="spacing">
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <Button onClick={(()=> handleAddToCart(item))}>Add to Cart</Button>
                </div>
              </div>
            </Link>
          ))}
          </CommoditiesWrapper>
        )}
    </>
  );
};

export default Commodities;
