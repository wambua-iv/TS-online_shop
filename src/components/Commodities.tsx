import { Link } from "react-router-dom";
import subImg from "../images/subImg.jpg";
import { CommoditiesWrapper } from "../styles/Commodities.styles";
import Button from "@mui/material/Button/index"
import { LinearProgress } from "@mui/material";
import { item } from "../App";

interface Props {
  data: any;
  loading: boolean;
  handleAddToCart: (item:item) => void;
}

const Commodities: React.FC<Props> = ({ data, loading, handleAddToCart }) => {
  return (
    <>
      <CommoditiesWrapper>
        {loading ? (
          <LinearProgress />
        ) : (
          data.map((item: item) => (
            <Link to={item.id}>
              <div key={item.id} className="item">
                <div className="item-wrapper">
                  <img src={subImg} alt="Not found" />
                  <div className="content">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <div className="spacing">
                      <span>Price :</span>
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <Button onClick={(()=> handleAddToCart(item))}>Add to Cart</Button>
                </div>
              </div>
            </Link>
          ))
        )}
      </CommoditiesWrapper>
    </>
  );
};

export default Commodities;
