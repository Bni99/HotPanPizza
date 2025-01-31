import { FaPlus } from "react-icons/fa";
import {
  StandardHeading,
  StandardOrangeText,
  StandardSubheading,
} from "../styles/Headings";
import { StandardBlueButton } from "../styles/Buttons";
import { StandardFlex, StyledMenuItem } from "../styles/Layouts";
import { StandardRoundedImage } from "../styles/Image";

const MenuItem = ({ pizza }) => {
  const { name, unitPrice, imageUrl, soldOut, ingredients } = pizza;
  return (
    <StyledMenuItem>
      <StandardRoundedImage src={imageUrl} alt="pizza"></StandardRoundedImage>
      <StandardFlex>
        <StandardHeading>{name}</StandardHeading>
        <StandardOrangeText>{unitPrice} $</StandardOrangeText>
      </StandardFlex>

      {soldOut}

      <StandardSubheading>
        Delicious combination of
        {ingredients.map((ingredient) => (
          <> {ingredient} </>
        ))}
      </StandardSubheading>
      <StandardBlueButton>
        Add <FaPlus size={13} />
      </StandardBlueButton>
    </StyledMenuItem>
  );
};

export default MenuItem;
