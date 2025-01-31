import { FaPlus } from "react-icons/fa";
import { StandardBlueButton } from "../styles/Buttons";
import {
  StandardHeading,
  StandardOrangeText,
  StandardSubheading,
} from "../styles/Headings";
import { StandardRoundedImage } from "../styles/Image";
import {
  BestSellersMenuItemLayout,
  ColumnFlex,
  Container,
} from "../styles/Layouts";

const BestSellersMenuItem = ({ bestseller }) => {
  const { name, unitPrice, imageUrl, ingredients } = bestseller;
  return (
    <BestSellersMenuItemLayout>
      <ColumnFlex>
        <StandardRoundedImage src={imageUrl} alt="pizza"></StandardRoundedImage>
        <StandardOrangeText small bold>
          {unitPrice} $
        </StandardOrangeText>
      </ColumnFlex>

      <Container>
        <ColumnFlex>
          <StandardHeading>{name}</StandardHeading>
          <StandardSubheading>
            Delicious combination of
            {ingredients.map((ingredient) => (
              <> {ingredient} </>
            ))}
          </StandardSubheading>
          <StandardBlueButton>
            Add <FaPlus size={13} />
          </StandardBlueButton>
        </ColumnFlex>
      </Container>
    </BestSellersMenuItemLayout>
  );
};

export default BestSellersMenuItem;
