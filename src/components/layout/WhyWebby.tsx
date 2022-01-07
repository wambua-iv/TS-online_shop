import { Home, PaymentRounded, ShoppingCartRounded } from "@mui/icons-material"
import { AdSection, Wrapper } from "../../styles/WhyWebby.styles"


const WhyWebby = () => {
    return (
        <Wrapper>
            <div className="title">
                Why Choose Webby
            </div>
                <AdSection>
                    <div className="article-item">
                       <div className="icon">
                            <ShoppingCartRounded />
                       </div>
                        <h5>Large products catalogue at your finger tips</h5>
						<div className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo eligendi itaque, explicabo modi placeat nihil repellat, accusantium deserunt rerum suscipit? Consequatur, animi nesciunt unde voluptatum similique molestias saepe velit.
						</div>
                    </div>
                    <div className="article-item">
						<div className="icon">
								<PaymentRounded />
						</div>
                        <h5>Flexible payment options</h5>
						<div className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam explicabo magni qui quia. Molestias autem nulla nostrum labore vitae vel aliquid ducimus? Ipsam voluptatibus libero aliquid, provident est necessitatibus.
						</div>
                    </div>
                    <div className="article-item">
					<div className="icon">
								<Home />
						</div>
                        <h5>Most affordable delivery fees in the market</h5>
						<div className="description">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dicta aspernatur deserunt autem similique ab vero! Quidem quis eos veniam voluptatibus obcaecati architecto quaerat, quas adipisci blanditiis magnam? Eveniet, ratione!
						</div>
                    </div>
            </AdSection>
        </Wrapper>
    )
}

export default WhyWebby
