import { FaPlus } from "react-icons/fa";
import { StandardBlueButton } from "../../styles/Buttons";
import { ColumnFlex } from "../../styles/Layouts";
import { Container } from "./style";

const BestSellersMenuItem = ({ bestseller }) => {
  const { name, unitPrice, imageUrl, ingredients } = bestseller;
  return (
    <Container>
      <ColumnFlex>
        <img src={imageUrl} alt="pizza" />
        <p className="price">{unitPrice}$</p>
      </ColumnFlex>

      <div>
        <ColumnFlex>
          <h1>{name}</h1>
          <p>
            Delicious combination of
            {ingredients.map((ingredient) => (
              <> {ingredient} </>
            ))}
          </p>
          <StandardBlueButton>
            Add <FaPlus size={13} />
          </StandardBlueButton>
        </ColumnFlex>
      </div>
    </Container>
  );
};

export default BestSellersMenuItem;
